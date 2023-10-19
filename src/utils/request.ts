import { request } from '@umijs/max';
import { notification } from 'antd';

const showNotificationError = (message: string, description?: string) => {
  notification.error({
    message,
    description,
  });
};

const baseRequest = async (url: string, params?: any) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    //TODO: headers上添加自定义内容
    const response = await request(`/api${url}`, {
      method: 'POST',
      headers,
      data: params,
      timeout: 30 * 60,
    });
    if (response && response.code !== undefined) {
      switch (response.code) {
        case 0:
          // 接口成功
          return Promise.resolve(response.data);
        case 1:
          // 接口异常
          break;
        case 401:
          // 登录失效
          break;
        default:
          return Promise.reject(response);
      }
    } else {
      // 响应结果不是对象
      return Promise.resolve(response);
    }
  } catch (error: any) {
    // console.error('🚀 ~ file: request.ts:33 ~ baseRequest ~ error:', error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 登录失效
          break;
        case 403:
          // 没有权限
          break;
        case 404:
          // 接口不存在
          showNotificationError('请求地址不存在', error.config.url);
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
};

/**
 * post 请求
 * @param url
 * @param data
 * @returns
 */
export const post = async (url: string, data?: any) => baseRequest(url, data);
