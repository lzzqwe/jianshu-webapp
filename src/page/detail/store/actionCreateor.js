import * as constants from './constants'
import axios from 'axios'

const changeDetail = (title,content) => {
  return {
    type:constants.CHANGE_DETAIL,
    title,
    content
  }
}

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then((res) => {
       res = res.data.data
       dispatch(changeDetail(res.title,res.content))
    })
  }
}