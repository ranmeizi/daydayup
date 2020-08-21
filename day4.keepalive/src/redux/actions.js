import store from './store'
import * as ActionTypes from './actionTypes'

const { getState, dispatch } = store

// 触发这个路由
export function pushTab({
  url,
  title
}, history) {
  const { tabs } = getState()
  history.push({ pathname: url })
  // 在tabs没有的加上
  if (tabs.findIndex(item => item.url === url) < 0) {
    dispatch({
      type: ActionTypes.ADD_TAB,
      tab: {
        url,
        title
      }
    })
  }
}