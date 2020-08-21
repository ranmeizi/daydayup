import React from 'react'
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' //引入withRouter
const { TabPane } = Tabs;


const navs = function (props) {
  function onChange(...attr) {
    console.log(attr)
  }
  return <Tabs
    hideAdd
    onChange={onChange}
    activeKey={props.location.pathname}
    type="editable-card"
  >
    {props.tabs.map(pane => (
      <TabPane tab={pane.title} key={pane.url} />
    ))}
  </Tabs>
}

export default connect(state => ({ tabs: state.tabs }))(withRouter(navs))