import { post } from '@/utils/request';

export const login = (data: LOGIN.LoginParams) =>
  post('/admin/login', data) as Promise<LOGIN.LoginResult>;
