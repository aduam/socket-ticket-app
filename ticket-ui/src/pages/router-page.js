import { useContext } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import { UIContext } from '../context/ui-context';
import { AddTicket } from './add-ticket';
import { Desk } from './desk';
import { Login } from './login';
import { Queue } from './queue';

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { hideMenu } = useContext(UIContext);
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider
          collapsedWidth='0'
          breakpoint='md'
          hidden={hideMenu}
        >
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<UserOutlined />}>
              <Link to='/login'>Ingresar</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              <Link to='/queue'>Cola</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<UploadOutlined />}>
              <Link to='/add-ticket'>Crear Ticket</Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<UploadOutlined />}>
              <Link to='/desk'>Escritorio</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/queue' element={<Queue />} />
              <Route path='/add-ticket' element={<AddTicket />} />
              <Route path='/desk' element={<Desk />} />
              <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
