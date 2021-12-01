import { useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  InputNumber,
  Typography,
  Divider,
} from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useHideMenu } from '../hooks/use-hide-menu';
import { getUserStorage } from '../helpers/get-user-storage';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};

const { Title, Text } = Typography;

export const Login = () => {
  useHideMenu(false);
  const navigate = useNavigate();

  const onFinish = ({ agent, desk }) => {
    localStorage.setItem('agent', agent);
    localStorage.setItem('desk', desk);
    navigate('/desk');
  };

  const onFinishFailed = (error) => {
    // code
  };

  useEffect(() => {
    const { agent, desk } = getUserStorage();
    if (agent && desk) {
      navigate('/desk');
    }
  }, []);


  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
      { ...layout }
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Nombre del agente'
        name='agent'
        rules={[{ required: true, message: 'Ingrese su nombre' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Escritorio'
        name='desk'
        rules={[{ required: true, message: 'Ingrese el número de escritorio' }]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>
      <Form.Item { ...tailLayout }>
        <Button
          type='primary'
          htmlType='submit'
          shape='round'
        >
          <SaveOutlined />Iniciar
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};
