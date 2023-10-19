import { Radar, RadarConfig } from '@ant-design/charts';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Row, Typography } from 'antd';
import { useMemo } from 'react';

import WorkplaceHeader from './components/Header';
import WorkplacePendingOrders from './components/PendingOrderList';
import WorkplaceReceiveOrders from './components/ReceiveOrderList';

export default function WorkplacePage() {
  const quickNavList = useMemo(
    () => [
      { href: '', title: '工单审核' },
      { href: '', title: '工单审核' },
      { href: '', title: '工单审核' },
      { href: '', title: '工单审核' },
      { href: '', title: '工单审核' },
      { href: '', title: '工单审核' },
    ],
    [],
  );

  const config: RadarConfig = {
    data: [
      {
        item: '销售订单',
        user: '个人',
        score: 70,
      },
      {
        item: '销售订单',
        user: '团队',
        score: 30,
      },
      {
        item: '通过率',
        user: '个人',
        score: 60,
      },
      {
        item: '通过率',
        user: '团队',
        score: 70,
      },
      {
        item: '领取工单',
        user: '个人',
        score: 50,
      },
      {
        item: '领取工单',
        user: '团队',
        score: 60,
      },
      {
        item: '拒绝工单',
        user: '个人',
        score: 40,
      },
      {
        item: '拒绝工单',
        user: '团队',
        score: 50,
      },
    ],
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    // 开启辅助点
    point: {
      size: 2,
    },
  };
  return (
    <PageContainer title="工作台" content={<WorkplaceHeader />}>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} xl={16} xxl={16}>
          <ProCard ghost direction="column" gutter={[0, 16]}>
            {/* 进行中的订单 */}
            <ProCard ghost>
              <WorkplacePendingOrders />
            </ProCard>
            <ProCard title="快捷导航" headerBordered hoverable>
              <Row gutter={[0, 8]}>
                {quickNavList.map((item, index) => (
                  <Col key={index} xs={24} sm={12} md={8} xl={6} xxl={4}>
                    <Typography.Link href={item.href}>{item.title}</Typography.Link>
                  </Col>
                ))}
              </Row>
            </ProCard>
          </ProCard>
        </Col>
        <Col xs={24} sm={24} md={24} xl={8} xxl={8}>
          <ProCard ghost direction="column" gutter={[0, 16]}>
            {/* 动态 */}
            <ProCard ghost>
              <WorkplaceReceiveOrders />
            </ProCard>
            <ProCard title="贡献指数" headerBordered hoverable>
              <Radar {...config}></Radar>
            </ProCard>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
}
