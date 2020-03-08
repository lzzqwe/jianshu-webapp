import React from 'react';

import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'

import {DetailWrapper,DetailHeader,Content} from './style'

import {actionCreateor} from './store/index'

class Detail extends React.Component {
  componentDidMount() {
   this.props.getDetail(this.props.match.params.id)
  }
  render() {
    const {title,content} = this.props
    return (
      <DetailWrapper>
        <DetailHeader>{title}</DetailHeader>
        <Content 
        dangerouslySetInnerHTML={{__html:content}}
        ></Content>
      </DetailWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreateor.getDetail(id))
    }
  } 
}
export default connect(mapState,mapDispatch)(withRouter(Detail))