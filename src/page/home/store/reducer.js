import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultStatus =fromJS({
  articleList:[],
  articlePage:1,
  showScroll:false
})
export default (state=defaultStatus,action) => {
  if(action.type === constants.CHANGE_HOME_DATA ) {
     return state.set('articleList',action.articleList)
  }
  if(action.type === constants.ADD_ARTICLE_LIST) {
    return state.merge({
      articleList:state.get('articleList').concat(action.list),
      articlePage:action.nextPage
    })
  }
  if(action.type === constants.TOGGLE_SCROLL_TOP) {
    return state.set('showScroll',action.show)
  }
  return state
}