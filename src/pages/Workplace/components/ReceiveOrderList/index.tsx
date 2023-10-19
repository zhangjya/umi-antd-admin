import { ProCard, ProList } from '@ant-design/pro-components';
import { Avatar, Typography } from 'antd';
import { useMemo } from 'react';

/**
 * 接单动态
 * @returns
 */
export default function WorkplaceReceiveOrders() {
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
    <ProCard title="动态" headerBordered hoverable>
      <ProList
        pagination={false}
        dataSource={orderList}
        ghost
        rowKey="orderId"
        metas={{
          title: {
            render: (_, record) => (
              <span>
                <span>彭于晏 领取了订单</span>
                <span>
                  <Typography.Text type="success">{record.orderId}</Typography.Text>
                </span>
              </span>
            ),
          },
          avatar: {
            render() {
              return <Avatar></Avatar>;
            },
          },
          description: {
            dataIndex: 'orderId',
            render() {
              return <span>5秒前</span>;
            },
          },
        }}
      ></ProList>
    </ProCard>
  );
}
