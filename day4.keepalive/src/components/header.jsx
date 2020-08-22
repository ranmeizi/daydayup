import React from 'react'
import { Tabs, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' //引入withRouter
import { pushTab, removeTab, removeOtherTabs, removeRightTabs,removeAllTabs } from '../redux/actions'
const { TabPane } = Tabs;


const navs = function (props) {
  function onChange(key) {
    pushTab({ url: key })
  }
  function onEdit(targetKey, action) {
    if (action === 'remove') {
      removeTab({ url: targetKey })
    }
  }
  return <Tabs
    hideAdd
    onChange={onChange}
    onEdit={onEdit}
    activeKey={props.location.pathname}
    type="editable-card"
  >
    {props.tabs.map(pane => (
      <TabPane tab={<Drop url={pane.url}>{pane.title}</Drop>} key={pane.url} />
    ))}
  </Tabs>
}

export default connect(state => ({ tabs: state.tabs }))(withRouter(navs))



function Drop(props) {
  const { url } = props
  const menu = (
    <Menu>
      <Menu.Item onClick={({ domEvent }) => {
        domEvent.stopPropagation()
        removeTab({ url })
      }}>
        <a >
          关闭
        </a>
      </Menu.Item>
      <Menu.Item onClick={({ domEvent }) => {
        domEvent.stopPropagation()
        removeOtherTabs({ url })
      }}>
        <a >
          关闭其他
        </a>
      </Menu.Item>
      <Menu.Item onClick={({ domEvent }) => {
        domEvent.stopPropagation()
        removeRightTabs({ url })
      }}>
        <a>
          关闭到右侧
        </a>
      </Menu.Item>
      <Menu.Item onClick={({ domEvent }) => {
        domEvent.stopPropagation()
        removeAllTabs()
      }}>
        <a >
          关闭所有
        </a>
      </Menu.Item>
    </Menu>
  );
  return <Dropdown overlay={menu} trigger='contextMenu'>
    <div className="ant-dropdown-link">
      {props.children}
    </div>
  </Dropdown>
}