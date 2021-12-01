import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { useHideMenu } from '../hooks/use-hide-menu';

const { Title, Text } = Typography;

export const AddTicket = () => {
  useHideMenu(true);
  const newTicket = () => {
    console.log('new ticket');
  };

  return (
    <>
      <Row>
        <Col offset={6} span={14} align='center'>
          <Title level={3}>
            Presione el botón para un nuevo ticket
          </Title>
          <Button
            type='primary'
            shape='round'
            icon={<DownloadOutlined />}
            size='large'
            onClick={newTicket}
          >
            asdf
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align='center'>
          <Text level={2}>
            Su número
          </Text>
          <br />
          <Text type='success' level={2} style={{ fontSize: 30 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
