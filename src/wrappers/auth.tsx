import { Navigate, Outlet } from 'umi';

export default () => {
  const isLogin = true;
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
