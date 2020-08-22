import React from 'react'
import KeepAlive from 'react-activation'
import { connect } from 'react-redux'

export default function withAliveComponent(Component) {
  // 包裹一层KeepAlive
  const wrapAliveComponent = function (props) {
    const id = props.location.pathname
    // 当url存在与tabs数组中，保持缓存
    return <KeepAlive id={id} when={props.tabs.findIndex(item => item.url === id) >= 0}>
      <Component {...props} />
    </KeepAlive>
  }
  // 绑定store中的tabs
  return connect(state => {
    return {
      tabs: state.tabs
    }
  })(wrapAliveComponent)
}