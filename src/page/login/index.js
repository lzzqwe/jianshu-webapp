import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {actionCreateor} from './store/index'
import {LoginBox,LoginWrapper,Input,Button} from './style'
class Login extends React.PureComponent {
  render() {
    const {loginStatus,login} = this.props
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input 
            placeholder='账号'
            innerRef={(input) =>{this.account=input}}></Input>
            <Input 
            type='password' 
            placeholder='密码'
            innerRef={(input) =>{this.password=input}}
            ></Input>
            <Button onClick={() =>{login(this.account,this.password)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
     return (<Redirect to='/'></Redirect>)
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus:state.getIn(['login','login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
     login(account,password) {
       dispatch(actionCreateor.login(account.value,password.value))
     }
  }
}


export default connect(mapState,mapDispatch)(Login)