import React from 'react'
import KeepAlive from 'react-activation'
import { connect } from 'react-redux'

export default function withAliveComponent(Component) {
  const wrapAliveComponent = function (props) {
    const id = props.location.pathname
    return <KeepAlive id={id} when={props.tabs.findIndex(item => item.url === id) >= 0}>
      <Component {...props} />
    </KeepAlive>
  }
  return connect(state => {
    return {
      tabs: state.tabs
    }
  })(wrapAliveComponent)
}