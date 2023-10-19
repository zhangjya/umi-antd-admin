// 运行时配置

import { RunTimeLayoutConfig, history } from '@umijs/max';
import { Modal } from 'antd';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'zzz' };
}

/**
 * 配置 layout
 *
 * 参考链接：https://umijs.org/docs/max/layout-menu#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 * @returns
 */
export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: false,
    // navTheme: 'realDark',
    contentWidth: 'Fluid',
    colorPrimary: $PRIMARY,
    siderMenuType: 'sub',
    fixedHeader: true,
    siderWidth: 188,
    // 通过token修改主题色
    token: {
      sider: {
        colorMenuBackground: '#ffffff',
      },
      header: {
        colorBgHeader: '#001529',
        colorHeaderTitle: '#ffffff',
        heightLayoutHeader: 48,
      },
      pageContainer: {},
    },
    logout: (initialState: any) => {
      console.log(initialState);
      Modal.confirm({
        title: '注销登录',
        content: '确定要注销登录吗？',
        okText: '确定',
        cancelText: '取消',
        okButtonProps: {
          danger: true,
        },
        onOk: () => {
          history.replace('/login');
        },
      });
    },
    // actionsRender: (props) => {
    //   if (props.isMobile) return [];
    //   if (typeof window === 'undefined') return [];
    //   return [
    //     <InfoCircleFilled key="InfoCircleFilled" />,
    //     <QuestionCircleFilled key="QuestionCircleFilled" />,
    //     <GithubFilled key="GithubFilled" />,
    //   ];
    // },
  };
};
