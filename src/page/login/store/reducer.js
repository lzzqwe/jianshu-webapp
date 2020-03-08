import * as constants from './constants'

import {
  fromJS
} from 'immutable'

const defaultState = fromJS({
  login: false
})
export default ( state=defaultState, action) => {
  if (action.type === constants.CHANGE_LOGIN) {
    return state.set('login', action.value)
  }
  if (action.type === constants.CHANGE_LOGOUT) {
    return state.set('login', action.value)
  }
  return state
}