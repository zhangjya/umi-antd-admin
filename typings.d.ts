import '@umijs/max/typings';
declare global {
  const $PRIMARY: string;
  interface ProTableParams {
    pageSize?: number | undefined;
    current?: number | undefined;
    keyword?: string | undefined;
    [x: string]: any;
  }

  interface ProTableResult {
    data: any[];
    // success 请返回 true，
    // 不然 table 会停止解析数据，即使有数据
    success: boolean;
    // 不传会使用 data 的长度，如果是分页一定要传
    total: number;
    [x: string]: any;
  }
}
