import store from './store'
import * as ActionTypes from './actionTypes'

const { getState, dispatch } = store

// 新增tab
export function pushTab({
  url,
  title
}) {
  const { tabs } = getState()
  push(url)
  // 在tabs没有的加上
  if (tabs.findIndex(item => item.url === url) < 0) {
    tabs.push({
      url,
      title
    })
    dispatch({
      type: ActionTypes.SET_TABS,
      tabs: tabs
    })
  }
}
// 关闭这个tab
export function removeTab({ url }) {
  const { tabs } = getState()
  let newTabs = tabs.filter(item => item.url !== url)
  push(newTabs[newTabs.length - 1].url)
  dispatch({
    type: ActionTypes.SET_TABS,
    tabs: newTabs
  })
}
// 关闭其他
export function removeOtherTabs({ url }) {
  const { tabs } = getState()
  let newTabs = tabs.filter(item => item.url === url)
  newTabs.length > 0 && push(newTabs[newTabs.length - 1].url)
  dispatch({
    type: ActionTypes.SET_TABS,
    tabs: newTabs
  })
}
// 关闭到右侧
export function removeRightTabs({ url }) {
  const { tabs } = getState()
  let i = tabs.findIndex(item => item.url === url)
  let newTabs = tabs.filter((item, index) => index <= i)
  newTabs.length > 0 && push(newTabs[newTabs.length - 1].url)
  dispatch({
    type: ActionTypes.SET_TABS,
    tabs: newTabs
  })
}
// 关闭全部
export function removeAllTabs() {
  push('/')
  dispatch({
    type: ActionTypes.SET_TABS,
    tabs: []
  })
}

function push(url) {
  location.href = location.origin + location.pathname + '#' + url
}