import { useEffect } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useHideMenu } from '../hooks/use-hide-menu';
import {
  getUserStorage,
} from '../helpers/get-user-storage';

const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);
  const navigate = useNavigate();
  const { agent, desk } = getUserStorage();

  const nextTicket = () => {
    console.log('new ticket')
  };

  const handleCloseSession = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    if (!agent || !desk) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agent}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type='success'>{desk}</Text>
        </Col>
        <Col span={4} align='right'>
          <Button shape='round' type='danger' onClick={handleCloseSession}>
            <CloseCircleOutlined /> Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket númer: </Text>
          <Text style={{ fontSize: 30 }} type='danger'>55</Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align='right'>
          <Button onClick={nextTicket} shape='round' type='primary'>
            <RightOutlined /> Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
