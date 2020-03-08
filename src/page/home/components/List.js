import React from 'react';
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {actionCreateor} from '../store/index'
import { ListItem, ListInfo,LoadMore } from '../style'
import { Link } from 'react-router-dom'
class List extends React.PureComponent {
  render() {
    const { list,page,getMoreList } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={`/detail/${item.id}`}>
                <ListItem>
                  <img className='pic' src={item.imgUrl} alt="" />
                  <ListInfo>
                    <h1 className='title'>{item.title}</h1>
                    <p className='desc'>{item.desc}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore
        onClick={() => {getMoreList(page)}}
        >加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    page:state.getIn(['home','articlePage'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreateor.getMoreList(page))
    }
  }
}


export default connect(mapState,mapDispatch)(List)