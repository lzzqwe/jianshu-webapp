import axios from 'axios'
import {fromJS} from 'immutable'
import * as constants from './constants'

const changeHomeData = (res) => {
  return {
    type:constants.CHANGE_HOME_DATA,
    articleList:fromJS(res.articleList)
  }
}
const addArticleList = (list,nextPage) => {
  return {
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
  }
}
export const toggleScrollTop = (show) => {
  return {
    type:constants.TOGGLE_SCROLL_TOP,
    show
  }
}
export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
       res = res.data.data
       dispatch(changeHomeData(res))
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res) => {
      res = res.data
      dispatch(addArticleList(res.data,page+1))
    })
  }
}
