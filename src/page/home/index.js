import React from 'react';
import {connect} from 'react-redux'
import {actionCreateor} from './store/index'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import List from './components/List'
class Home extends React.Component {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.chanageScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.chanageScrollTopShow)
  }
  handleScrollTop() {
    window.scrollTo(0,0)
  }
  render() {
    const {articleList,showScroll} = this.props
    const newList = articleList.toJS()
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <List list={newList}></List>
        </HomeLeft>
        <HomeRight>
           <img className='right-item' src="http://localhost:3001/img/jianshu-1.png" alt=""/>
           <img className='right-item' src="http://localhost:3001/img/jianshu-2.png" alt=""/>
           <img className='right-item' src="http://localhost:3001/img/jianshu-3.png" alt=""/>
           <img className='right-item' src="http://localhost:3001/img/jianshu-4.png" alt=""/> 
        </HomeRight>
        {showScroll ? <BackTop onClick={() => {this.handleScrollTop()}}>顶部</BackTop>:null}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList:state.getIn(['home','articleList']),
    showScroll:state.getIn(['home','showScroll'])
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreateor.getHomeList())
    },
    chanageScrollTopShow() {
      if(document.documentElement.scrollTop > 100) {
        dispatch(actionCreateor.toggleScrollTop(true))
      } else {
        dispatch(actionCreateor.toggleScrollTop(false))
      }
    }
  }
}


export default connect(mapStateToProps,mapDispatchProps)(Home)