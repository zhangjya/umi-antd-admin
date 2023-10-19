import { ProCard, ProList } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, Tag, Typography } from 'antd';
import { useMemo } from 'react';

export default function WorkplacePendingOrders() {
  const orderList = useMemo(
    () => [
      { orderId: '123131231' },
      { orderId: '123131131' },
      { orderId: '123131431' },
      { orderId: '123132231' },
      { orderId: '123331231' },
      { orderId: '125131231' },
      { orderId: '126131231' },
    ],
    [],
  );
  return (
    <ProCard
      title="进行中的订单"
      headerBordered
      hoverable
      extra={<Link to="/order">查看更多</Link>}
    >
      <ProList
        pagination={false}
        dataSource={orderList}
        ghost
        rowKey="orderId"
        metas={{
          title: {
            render: (_, record) => <Typography.Text copyable>{record.orderId}</Typography.Text>,
          },
          subTitle: {
            render: () => (
              // <Tag icon={<SyncOutlined spin />} color="processing">
              //   待审核
              // </Tag>
              <Tag color="processing">线上订单</Tag>
            ),
          },
          description: {
            dataIndex: 'orderId',
            render(_, entity) {
              return (
                <span>
                  <span>
                    预计总金额：
                    <Typography.Text type="danger">${entity.orderId}</Typography.Text>
                  </span>
                </span>
              );
            },
          },
          content: {
            render() {
              return <span>iPhone 15 Pro Max</span>;
            },
          },
          actions: {
            render() {
              return [
                <Button key="1" type="link" ghost size="small">
                  审核
                </Button>,
                <Button key="1" type="text" danger ghost size="small">
                  放弃
                </Button>,
              ];
            },
          },
        }}
      ></ProList>
    </ProCard>
  );
}
