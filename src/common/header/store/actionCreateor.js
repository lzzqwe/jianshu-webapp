import * as constants from './constants'
// import {fromJS} from 'immutable'
export const searchFocus = () => {
  return {
    type:constants.SEARCH_FOCUS
  }
}
export const searchBlur = () => {
  return {
    type:constants.SEARCH_BLUR
  }
}