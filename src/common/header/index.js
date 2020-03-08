import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreateor } from './store/index'
import {actionCreateor as loginActionCreateor} from '../../page/login/store/index'
import {
  HeadWrapper,
  Logo,
  Nav,
  NavItem, SearchWrapper, NavSearch, Addition, Button,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList,
  SearchInfoItem
} from './style'
import { CSSTransition } from 'react-transition-group';

class Header extends React.Component {
  getListArea() {
    const { focused, list, page, handleChangePage,
      totalPage, mouseIn,
      handleMouseEnter,
      handleMouseLeave
    } = this.props
    const newList = list.toJS() // 转换为原生JS数组。
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => { handleChangePage(page, totalPage, this.spinIocn) }}
            >
              <i ref={(icon) => { this.spinIocn = icon }} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, loginStatus,logout } = this.props
    return (
      <HeadWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/'>
            <NavItem className='left  active'>首页</NavItem>
          </Link>
          <NavItem className='left'>下载app</NavItem>
          {loginStatus ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
          <Link to='/login'>
            <NavItem className='right'>登录</NavItem>
          </Link>}
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focus' : ''}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={() => { handleInputBlur() }}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'zoom iconfont focused' : 'zoom iconfont '}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writing'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeadWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    loginStatus: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreateor.getList())
      dispatch(actionCreateor.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreateor.searchBlur())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      console.log(originAngle)
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      //  spin.style.transform = `rotate${originAngle+360}deg`
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreateor.changePage(page + 1))
      } else {
        dispatch(actionCreateor.changePage(1))
      }
    },
    handleMouseEnter() {
      dispatch(actionCreateor.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreateor.mouseLeave())
    },
    logout() {
      dispatch(loginActionCreateor.changeLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)