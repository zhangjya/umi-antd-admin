# 项目说明

`umi` 搭建的管理后台开发框架 [Umi Max 简介](https://umijs.org/docs/max/introduce)

## 项目介绍

- 项目基于 `umi` 搭建，使用 `react` 技术栈，`antd` 和 `antdpro` 作为 UI 库，`typescript` 作为开发语言
- 项目基于 `umi-plugin-mock` 实现接口模拟，无需启动服务，即可模拟接口返回数据
- 项目基于 `umi-plugin-proxy` 实现接口代理，无需配置 `proxy` 即可实现跨域请求

## 安装依赖

```bash
$ yarn
```

## 启动项目

```bash
$ yarn dev
$ yarn start
```

## 打包项目

```bash
$ yarn build
```

## 项目目录

```bash
.
├── config 项目配置文件
├── mock
├── public
├── src
    ├── assets 静态资源
    ├── components 公用组件
    ├── models 数据模型
    ├── pages 页面
    ├── services 服务
    ├── utils 工具
    ├── wrappers 组件包装
    ├── access.ts 权限字段
    └── app.ts 运行时配置
├── package.json
├── tsconfig.json
```

## 项目配置

### 代理配置

[本地服务配置代理，点击跳转](./config/proxyConfig.ts)

### 主题配置

[主题配置，点击跳转](./config/themeConfig.ts)

### 路由配置

[路由配置，点击跳转](./config/routesConfig/index.ts)

配置路由时，可参考 [LayoutRouteType 类型](./config/routesConfig/types.ts)

### 接口模拟

[模拟接口，在后台接口没有写好时可以使用功能](./mock/loginAPI.ts)
