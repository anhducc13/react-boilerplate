import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { browserHistory } from 'helpers';
import './style.scss';

const Login = props => {
  console.log(props);
  const login = () => {
    // lưu vào localStorage
    browserHistory.push('/');
  };
  return (
    <div className="login-container">
      <div className="content">
        <div className="top">
          <div className="header-login">
            <img
              alt="logo"
              className="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
          </div>
          <div className="desc">Đăng nhập hệ thống quản lý</div>
        </div>
        <div className="login">
          <Form onSubmit={() => login()}>
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Tên đăng nhập"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                style={{
                  width: '100%',
                  marginTop: 24,
                }}
                type="primary"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
