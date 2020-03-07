import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
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
export const changePage = (page) => {
  return {
    type:constants.CHANGE_PAGE,
    page
  }
}
export const mouseEnter = () => {
  return {
    type:constants.MOUSE_ENTER
  }
}
export const mouseLeave =() => {
  return {
    type:constants.MOUSE_LEAVE
  }
}
const changeList = (data) => {
  return {
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.floor(data.length/10)
  }
}
export const getList = () => {
  return (dispatch) => {
     axios.get('/api/headerList.json')
     .then((res) => {
        dispatch(changeList(res.data.data))
     })
     .catch(() => {
      console.log('error')
     })
  }
}
