import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { renderRoutes } from "react-router-config";
import { Link } from 'react-router-dom';
import '../App.less'
import NavTabs from '../components/header'
import { pushTab } from '../redux/actions'

const { Header, Sider, Content } = Layout;
let menu = Array(5).fill(1).map(() => {
  let id = Math.floor(Math.random() * 1000)
  return {
    url: `/List/${id}`,
    title: `列表${id}`
  }
})

export default function App(props) {
  const [collapsed, setCollapsed] = useState(false)
  function onSelect({ key, item }) {
    pushTab({
      url: key,
      title: item.props.navTitle
    })
  }
  return <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={[props.location.pathname]} onSelect={onSelect}>
        {menu.map(item => <Menu.Item key={item.url} icon={<UserOutlined />} navTitle={item.title}>
          {item.title}
        </Menu.Item>)}
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
        <NavTabs />
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {renderRoutes(props.route.children)}
      </Content>
    </Layout>
  </Layout>
}
