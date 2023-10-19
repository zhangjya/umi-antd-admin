import { login } from '@/services/loginApi';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProConfigProvider, ProFormText } from '@ant-design/pro-components';
import { history, useRequest } from '@umijs/max';
import { Button, Divider, GlobalToken, theme } from 'antd';

const getActivityConfig = (token: GlobalToken) => {
  return {
    style: {
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
      color: token.colorTextHeading,
      borderRadius: 8,
      backgroundColor: 'rgba(255,255,255,0.25)',
      backdropFilter: 'blur(4px)',
    },
    title: '活动标题，可配置图片',
    subTitle: '活动介绍说明文字',
    action: (
      <Button
        size="large"
        style={{
          borderRadius: 20,
          background: token.colorBgElevated,
          color: token.colorPrimary,
          width: 120,
        }}
      >
        去看看
      </Button>
    ),
  };
};

const LoginPage = () => {
  const { token } = theme.useToken();

  const requestLogin = useRequest(login, {
    manual: true,
    loadingDelay: 1000,
    onSuccess: () => {
      history.replace('/home');
    },
  });

  return (
    <div style={{ height: '100vh' }}>
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="Github"
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)',
        }}
        subTitle="全球最大的同性交友平台"
        activityConfig={getActivityConfig(token)}
        actions={
          <div>
            <Divider plain>
              <span
                style={{
                  color: token.colorTextPlaceholder,
                  fontWeight: 'normal',
                  fontSize: 14,
                }}
              >
                忘记秘密？请联系管理员
              </span>
            </Divider>
          </div>
        }
        onFinish={async (values) => {
          await requestLogin.run(values);
          return true;
        }}
      >
        <ProFormText
          name="account"
          width="md"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder={'账号'}
          rules={[
            {
              required: true,
              message: '请输入账号!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          width="md"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={'密码'}
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <LoginPage />
    </ProConfigProvider>
  );
};
