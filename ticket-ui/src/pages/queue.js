import { useEffect, useContext, useState } from 'react';
import {
  Row,
  Col,
  Typography,
  List,
  Card,
  Tag,
  Divider,
} from 'antd';

import { useHideMenu } from '../hooks/use-hide-menu';
import { SocketContext } from '../context/socket-context';

const { Title, Text } = Typography;

export const Queue = () => {
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);
  useHideMenu(true);

  useEffect(() => {
    socket.on('tickets', (data) => {
      setTickets(data);
    });

    return () => socket.off('tickets');
  }, [socket]);

  useEffect(() => {
    fetch('http://localhost:2000/')
      .then((data) => data.json())
      .then((data) => {
        setTickets(data);
      })
  }, []);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={ tickets.slice(0, 3) }
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano'>{item.agent}</Tag>,
                    <Tag color='magenta'>Escritorio: {item.desk}</Tag>
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type='secondary'>En el escritorio: </Text>
                      <Tag color='magenta'>{item.number}</Tag>
                      <Text type='secondary'>Agente: </Text>
                      <Tag color='volcano'>{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
