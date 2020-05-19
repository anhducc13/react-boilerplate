/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { browserHistory } from 'helpers';

const { Sider, Footer } = Layout;
const { SubMenu } = Menu;

const AppSider = props => {
  // Get selectedKey, openKey from route & pathname
  const { filteredNavigation } = props;
  const { location } = browserHistory;
  const getParentKey = selectedKey => {
    return filteredNavigation.find(
      item => item.children && item.children.includes(selectedKey),
    );
  };
  let selectedKey = location.pathname;
  let parentKey = getParentKey(selectedKey);
  if (!parentKey) {
    selectedKey = `/${selectedKey.split('/')[1]}`;
    parentKey = getParentKey(selectedKey);
  }
  const openKey = parentKey ? parentKey.path : '/';

  const logoUrl = '';
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <Sider
      className={`app-sider${collapsed ? ' collapsed' : ''}`}
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={270}
    >
      <Icon
        className="app-icon app-trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />

      {logoUrl && (
        <div className="app-logo">
          <Link to="/">
            <img src={logoUrl} alt="logo" />
          </Link>
        </div>
      )}

      <Menu
        className="app-menu"
        theme="dark"
        mode="inline"
        defaultOpenKeys={[openKey]}
        selectedKeys={[selectedKey]}
      >
        {filteredNavigation.map(item => {
          if (!item.icon) return null;
          if (!item.children) {
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  <Icon className="app-icon" type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            );
          }
          const { children } = item;
          const childs = filteredNavigation.filter(
            child => children.includes(child.path) && !child.children,
          );
          return (
            <SubMenu
              key={item.path}
              title={
                <span>
                  <Icon className="app-icon" type={item.icon} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {childs.map(child => {
                return (
                  <Menu.Item key={child.path}>
                    <Link to={child.path}>{child.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>

      {!collapsed && (
        <Footer className="app-footer">
          React Sample © {process.env.REACT_APP_VERSION}
        </Footer>
      )}
    </Sider>
  );
};

export default AppSider;
