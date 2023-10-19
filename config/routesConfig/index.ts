import { LayoutRouteType } from './types';

// 配置路由
export default {
  routes: <LayoutRouteType[]>[
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
      menuRender: false,
      footerRender: false,
      headerRender: false,
      hideInMenu: true,
      layout: false,
    },
    {
      name: '工作台',
      path: '/workplace',
      component: './Workplace',
      icon: 'LaptopOutlined',
    },
    {
      name: '用户管理',
      path: '/user',
      component: './Workplace',
      icon: 'UserOutlined',
    },
    {
      name: '订单管理',
      path: '/order',
      component: './Workplace',
      icon: 'AccountBookOutlined',
    },
    {
      name: '商品管理',
      path: '/product',
      icon: 'ContainerOutlined',
      routes: [
        { path: '/product/', redirect: '/product/list' },
        { name: '商品分类', path: '/product/category', component: './Product/Category' },
        { name: '商品列表', path: '/product/list', component: './Product/List' },
        {
          name: '商品详情',
          path: '/product/detail/:id',
          component: './Product/Detail',
          hideInMenu: true,
          parentKeys: ['/product/list'],
        },
      ],
    },
    {
      name: '文章管理',
      path: '/article',
      icon: 'FileOutlined',
      routes: [
        { path: '/article/', redirect: '/article/list' },
        { name: '文章分类', path: '/article/category', component: './Article/Category' },
        { name: '文章列表', path: '/article/list', component: './Article/List' },
        {
          name: '文章详情',
          path: '/article/detail/:id',
          component: './Article/List',
          hideInMenu: true,
          parentKeys: ['/article/list'],
        },
      ],
    },
    {
      name: '系统设置',
      path: '/system',
      icon: 'setting',
      component: './Access',
      wrappers: ['@/wrappers/auth'],
      routes: [
        { path: '/system/', redirect: '/system/account' },
        { name: '账号管理', path: '/system/account', component: './Account' },
        { name: '部门管理', path: '/system/dept', component: './Account' },
        { name: '角色管理', path: '/system/role', component: './Account' },
        { name: '菜单管理', path: '/system/menu', component: './Account' },
        { name: '操作记录', path: '/system/operate', component: './Account' },
      ],
    },
  ],
};
