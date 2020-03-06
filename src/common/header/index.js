import React from 'react';
import {connect} from 'react-redux'
import {actionCreateor} from './store/index'
import {HeadWrapper,
  Logo,
  Nav,
  NavItem,SearchWrapper,NavSearch,Addition,Button
} from './style'
import { CSSTransition } from 'react-transition-group';

class Header extends React.Component{
  render() {
    const {focused,handleInputFocus,handleInputBlur} = this.props
    console.log(focused)
    return (
      <HeadWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left  active'>首页</NavItem>
          <NavItem className='left'>下载app</NavItem>
          <NavItem className='right'>登录</NavItem>
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
              className={focused?'focus':''}
              onFocus={() => {handleInputFocus()}}
              onBlur={() => {handleInputBlur()}}
              ></NavSearch>
            </CSSTransition>
            <i className='zoom iconfont'>&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>写文章</Button><Button className='reg'>注册</Button>
        </Addition>
      </HeadWrapper>
    )
  }
}

const mapStateToProps = (state) => {
   return {
     focused:state.getIn(['header','focused'])
   }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreateor.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreateor.searchBlur())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)