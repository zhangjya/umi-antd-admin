export type LayoutRouteType = {
  path: string;
  redirect?: string;
  name?: string;
  component?: string;
  /**
   * icon
   */
  icon?: string;
  flatMenu?: boolean;
  /**
   * 路由页面是否使用prolayout，默认 true
   */
  layout?: boolean;
  /**
   * 是否渲染菜单
   */
  menuRender?: boolean;
  /**
   * 是否渲染底部
   */
  footerRender?: boolean;
  /**
   * 是否渲染顶部
   */
  headerRender?: boolean;
  /**
   * 在菜单中隐藏
   */
  hideInMenu?: boolean;
  /**
   * 在面包屑隐藏
   */
  hideInBreadcrumb?: boolean;
  /**
   * 权限
   */
  access?: string;
  /**
   * 子路由
   */
  routes?: LayoutRouteType[];
  /**
   * 路由包裹，可以处理一下复用逻辑
   */
  wrappers?: string[];
};
