import { useEffect, useContext, useState } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { SocketContext } from '../context/socket-context';
import { useHideMenu } from '../hooks/use-hide-menu';
import {
  getUserStorage,
} from '../helpers/get-user-storage';

const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const [ticket, setTicket] = useState();
  const { agent, desk } = getUserStorage();

  const nextTicket = () => {
    socket.emit('next-ticket', { agent, desk }, (ticketAssigned) => {
      setTicket(ticketAssigned);
    });
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
        {
          ticket ? (
            <>
              <Text>Está atendiendo el ticket número: </Text>
              <Text style={{ fontSize: 30 }} type='danger'>{ ticket.number }</Text>
            </>
          ) : (
            <>
              <Text>No tiene ticket asignado</Text>
            </>
          )
        }
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
