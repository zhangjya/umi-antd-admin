import { Avatar, Divider, Flex, Space, Statistic, Typography } from 'antd';

export default function WorkplaceHeader() {
  return (
    <Flex align="center" gap={16} wrap="wrap">
      <Flex flex="0 0 40px">
        <Avatar size="large"></Avatar>
      </Flex>
      <Flex flex={1}>
        <div>
          <Typography.Title level={5}>你好，阿祖，祝你开心每一天！</Typography.Title>
          <Typography.Text type="secondary">
            销售专家<Divider type="vertical"></Divider>
            某某某事业群－某某平台部－某某销售部
          </Typography.Text>
        </div>
      </Flex>
      <Flex flex="0 0 200px" justify="flex-end">
        <Space>
          <Statistic title="接单数" value={112893} />
          <Divider type="vertical"></Divider>
          <Statistic title="通过率" value={99} suffix="%" />
        </Space>
      </Flex>
    </Flex>
  );
}
