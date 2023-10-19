import { defineConfig } from '@umijs/max';

import proxyConfig from './proxyConfig';
import routesConfig from './routesConfig';
import themeConfig from './themeConfig';

// 主题色变量
const PRIMARY_COLOR = '#69b1ff';
export default defineConfig({
  publicPath: './',
  history: {
    type: 'hash', // hash 路由
  },
  hash: true,
  antd: {
    theme: themeConfig(PRIMARY_COLOR),
  },
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '', // 使用umi/max中的useRequest时，会默认直接拿data
  },
  define: {
    $PRIMARY: PRIMARY_COLOR, // 主题色
  },
  layout: {
    title: '管理后台',
  },
  npmClient: 'pnpm',
  ...proxyConfig,
  ...routesConfig,
});
