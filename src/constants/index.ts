export const DEFAULT_NAME = '管理后台';

/**
 * protable 的默认配置，对搜索区域和右上方设置区域做了处理
 */
export const DEFAULT_PROTABLE_OPTIONS = {
  options: {
    reload: true,
    density: true,
    setting: false,
    fullScreen: true,
  },
  search: {
    collapsed: false,
  },
  rowKey: 'id',
  scroll: { x: 'max-content' }, // 设置 x轴 的滚动
};
