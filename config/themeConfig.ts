/**
 * 参考文档 https://ant.design/docs/react/customize-theme-cn#theme
 */

import { DeepPartial, ProAliasToken } from '@ant-design/pro-components';

export default (primaryColor: string) => ({
  token: <DeepPartial<ProAliasToken>>{
    colorPrimary: primaryColor, // 主题色
    fontSize: 13,
  },
  components: <DeepPartial<ProAliasToken>>{
    Menu: {},
    Layout: {
      headerColor: '#ffffff',
    },
  },
});
