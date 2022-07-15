import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../admin/Header'

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

type Props = {}
const { Content, Sider } = Layout;


const items2: MenuProps['items'] = [
  {key: "Laptop", icon: <LaptopOutlined/>, label: "Laptop"},
  {key: "Phone", icon: <NotificationOutlined/>, label: "Phone"},
  {key: "Tai nghe", icon: <LaptopOutlined/>, label: "Tai Nghe"}
]


const LayoutAdmin = (props: Props) => {
  return (
    <>
      <Layout>

        <Header/>

        <Layout>
          <Sider width={250} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 'calc(100vh - 151px)',
              }}
            >
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default LayoutAdmin