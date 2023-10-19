declare namespace PRODUCT {
  /**
   * 开启：1
   *
   * 关闭：2
   */
  enum Status {
    // 开启
    OPEN = 1,
    // 关闭
    CLOSE = 2,
    // 删除
    DELETE = 3,
  }
  /**
   * 商品分类数据类型
   */
  interface CategoryModel {
    id?: number;
    categoryName: string;
    categoryParentId?: number | string;
    categoryParentName?: string;
    createTime?: string;
    status: Status;
  }
  /**
   * 商品数据模型
   */
  interface ProductModel {
    id?: number;
    productName: string;
    productCategoryId?: number;
    productCategoryName?: string;
    // 图标
    icon?: string | string[];
    // 介绍图片，多张
    introImgs?: string[];
    // 商品单价
    price: number;
    // 商品售价
    salePrice: number;
    // 商品简介
    intro?: string;
    // 商品详细描述
    detail?: string;
    // 库存
    stock: number;
    status: Status;
    createTime?: string;
    // 更新时间
    updateTime?: string;
  }
}
