const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const categoryList = [
  {
    id: 1,
    categoryName: '商品分类1',
    categoryParentId: 0,
    categoryParentName: '分类2',
    categoryLevel: 0,
    categorySort: 0,
    createTime: '2021-08-11 14:51:16',
    status: 1,
  },
  {
    id: 2,
    categoryName: '分类2',
    categoryParentId: '',
    categoryParentName: '',
    categoryLevel: 0,
    categorySort: 0,
    createTime: '2021-08-11 14:51:16',
    status: 2,
  },
];

const list = [
  {
    id: 1,
    productName: '商品1',
    productCategoryId: '123',
    productCategoryName: '123',
    // 图标
    icon: '',
    // 介绍图片，多张
    introImgs: [],
    // 商品单价
    price: 123,
    // 商品售价
    salePrice: 124,
    // 商品简介
    intro: 'dsdsds',
    // 商品详细描述
    detail: 'qwqwqeq',
    // 库存
    stock: 10,
    status: 1,
    createTime: '2021-08-11 14:51:16',
  },
];

export default {
  'POST /api/admin/productCategory/pages': async (req: any, res: any) => {
    await sleep(1000);
    res.json({
      code: 0,
      message: '',
      data: <ProTableResult>{
        data: categoryList,
        success: true,
        total: 100,
      },
    });
  },
  'POST /api/admin/productCategory/list': async (req: any, res: any) => {
    await sleep(1000);
    res.json({
      code: 0,
      message: '',
      data: categoryList,
    });
  },
  'POST /api/admin/productCategory/delete': async (req: any, res: any) => {
    await sleep(1000);
    res.json({
      code: 0,
      message: '',
      data: true,
    });
  },
  'POST /api/admin/productCategory/update': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: true,
    });
  },
  'POST /api/admin/productCategory/add': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: true,
    });
  },
  'POST /api/admin/product/pages': async (req: any, res: any) => {
    await sleep(1000);
    res.json({
      code: 0,
      message: '',
      data: <ProTableResult>{
        data: list,
        success: true,
        total: 100,
      },
    });
  },
  'POST /api/admin/product/list': async (req: any, res: any) => {
    await sleep(1000);
    res.json({
      code: 0,
      message: '',
      data: list,
    });
  },
  'POST /api/admin/product/delete': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: true,
    });
  },
  'POST /api/admin/product/update': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: true,
    });
  },
  'POST /api/admin/product/add': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: true,
    });
  },
  'POST /api/admin/product/detail': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: list[0],
    });
  },
};
