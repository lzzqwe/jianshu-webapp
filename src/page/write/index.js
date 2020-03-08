import React from 'react';

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

class Write extends React.Component {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>
          Write
        </div>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
export default connect(mapState)(Write)