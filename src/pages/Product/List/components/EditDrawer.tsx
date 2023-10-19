import {
  DrawerForm,
  ProForm,
  ProFormDigit,
  ProFormInstance,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Row, Spin, message } from 'antd';
import { useEffect, useRef } from 'react';

import { productAdd, productDetail, productUpdate } from '@/services/productApi';

interface Props {
  open: boolean;
  data?: string | number;
  onFinish: () => void;
}

export default function ProductEditDrawer(props: Props) {
  const formRef = useRef<ProFormInstance>();

  const requestDetail = useRequest(productDetail, {
    manual: true,
    onSuccess(data) {
      if (data) {
        formRef.current?.setFieldsValue({
          ...data,
          status: data.status === 1,
          icon: data.icon ? [data.icon] : [],
        });
      }
    },
  });
  useEffect(() => {
    if (props.open && props.data) {
      requestDetail.run(props.data);
    }
  }, [props.data, props.open]);

  const requestAdd = useRequest(productAdd, {
    manual: true,
    onSuccess() {
      message.success('新增成功');
      props.onFinish();
    },
  });
  const requestUpdate = useRequest(productUpdate, {
    manual: true,
    onSuccess() {
      message.success('更新成功');
      props.onFinish();
    },
  });
  return (
    <DrawerForm
      formRef={formRef}
      open={props.open}
      width="50vw"
      title={props.data ? '编辑商品' : '新增商品'}
      drawerProps={{
        destroyOnClose: true,
        onClose: props.onFinish,
      }}
      onOpenChange={(_open) => !_open && props.onFinish()}
      onFinish={async (values: PRODUCT.ProductModel) => {
        // 点击确定按钮时触发
        const params = {
          ...values,
          status: values.status ? 1 : 0,
          icon: values.icon?.length ? values.icon[0] : '',
        };
        if (props.data) {
          params.id = Number(props.data);
          await requestUpdate.run(params);
        } else {
          await requestAdd.run(params);
        }
        return true;
      }}
    >
      <Spin spinning={requestDetail.loading} tip="加载中...">
        <Row gutter={16}>
          <Col span={14} xs={24} sm={14}>
            <ProFormText
              name="productName"
              label="商品名称"
              width="md"
              rules={[{ required: true, message: '请填写商品名称' }]}
              fieldProps={{ maxLength: 30, showCount: true }}
            ></ProFormText>
            <ProFormText
              name="intro"
              label="商品简介"
              width="md"
              rules={[{ required: true, message: '请填写商品名称' }]}
              fieldProps={{ maxLength: 50, showCount: true }}
              tooltip="简短介绍，最多50个字"
            ></ProFormText>
            <ProFormSelect name="categoryParentId" label="所属分类" width="md"></ProFormSelect>
          </Col>
          <Col span={10} xs={24} sm={10}>
            <ProFormUploadButton
              name="icon"
              label="商品图标"
              fieldProps={{
                listType: 'picture-card',
              }}
              max={1}
            ></ProFormUploadButton>
            <ProFormSwitch
              name="status"
              label="状态"
              checkedChildren="开启"
              unCheckedChildren="关闭"
              required
            ></ProFormSwitch>
          </Col>
        </Row>
        <ProForm.Group>
          <ProFormDigit
            name="price"
            label="单价"
            width="xs"
            rules={[{ required: true, message: '请填写单价' }]}
            min={0}
            max={1000000}
            fieldProps={{ precision: 2, step: 1, prefix: '￥' }}
            tooltip="最小为 0，最大为 100,000，仅支持两位小数"
          ></ProFormDigit>
          <ProFormDigit
            name="salePrice"
            label="售价"
            width="xs"
            rules={[{ required: true, message: '请填写售价' }]}
            min={0}
            max={1000000}
            fieldProps={{ precision: 2, step: 1, prefix: '￥' }}
            tooltip="最小为 0，最大为 100,000，仅支持两位小数"
          ></ProFormDigit>
          <ProFormDigit
            name="stock"
            label="库存"
            width="xs"
            rules={[{ required: true, message: '请填写库存' }]}
            min={0}
            max={1000000}
            fieldProps={{ precision: 0, step: 1, suffix: '个' }}
            tooltip="最小为 0，最大为 100,000，仅支持整数"
          ></ProFormDigit>
        </ProForm.Group>
        <ProFormUploadButton
          name="introImgs"
          label="商品展示图片"
          fieldProps={{
            listType: 'picture-card',
          }}
          max={5}
          extra="最多上传 5 张图片"
        ></ProFormUploadButton>
        <ProFormTextArea
          name="detail"
          label="商品详情"
          rules={[{ required: true, message: '请填写商品详情' }]}
          fieldProps={{ maxLength: 500, showCount: true, rows: 5 }}
        ></ProFormTextArea>
      </Spin>
    </DrawerForm>
  );
}
