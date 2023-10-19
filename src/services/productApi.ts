import { post } from '@/utils/request';

export const categoryPages = (params: ProTableParams) =>
  post('/admin/productCategory/pages', params) as Promise<ProTableResult>;

export const categoryAdd = (params: PRODUCT.CategoryModel) =>
  post('/admin/productCategory/add', params);

export const categoryUpdate = (params: PRODUCT.CategoryModel) =>
  post('/admin/productCategory/update', params);

export const categoryRemove = (id: string | number) =>
  post('/admin/productCategory/delete', { id });

export const productPages = (params: ProTableParams) =>
  post('/admin/product/pages', params) as Promise<ProTableResult>;

export const productAdd = (params: PRODUCT.ProductModel) => post('/admin/product/add', params);

export const productUpdate = (params: PRODUCT.ProductModel) =>
  post('/admin/product/update', params);

export const productRemove = (id: string | number) => post('/admin/product/delete', { id });

export const productDetail = (id: string | number) => post('/admin/product/detail', { id });
