import {combineReducers} from 'redux-immutable'

import {reducer as headerReducer } from '../common/header/store/index'

import {reducer as homeReducer} from '../page/home/store/index'

import {reducer as loginReducer} from '../page/login/store/index'

import {reducer as detailReducer} from '../page/detail/store/index'

const reducer = combineReducers({
  header:headerReducer,
  home:homeReducer,
  login:loginReducer,
  detail:detailReducer
})
export default reducer
