/**
 * 分类的编辑弹框，通过判断props是否传入id，决定是新增还是编辑商品分类
 */

import { categoryAdd, categoryUpdate } from '@/services/productApi';
import {
  DrawerForm,
  ProFormInstance,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

interface Props {
  open: boolean;
  data?: PRODUCT.CategoryModel | null;
  onFinish: () => void;
}

export default function CategoryEditDrawer(props: Props) {
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (props.open && props.data) {
      formRef.current?.setFieldsValue({
        ...props.data,
        status: props.data.status === 1, // 状态用switch，需要转一下类型
        categoryParentId: props.data.categoryParentId || undefined, // 传空字符串时，需要转成 undefined 才能显示 placeholder
      });
    }
  }, [props.data, props.open]);

  const requestAdd = useRequest(categoryAdd, {
    manual: true,
    onSuccess() {
      message.success('新增成功');
      props.onFinish();
    },
  });
  const requestUpdate = useRequest(categoryUpdate, {
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
      title={props.data ? '编辑分类' : '新增分类'}
      drawerProps={{
        destroyOnClose: true,
        onClose: props.onFinish,
      }}
      onOpenChange={(_open) => !_open && props.onFinish()}
      onFinish={async (values: PRODUCT.CategoryModel) => {
        // 点击确定按钮时触发
        const params = { ...values, status: values.status ? 1 : 0 };
        if (props.data) {
          params.id = props.data.id;
          await requestUpdate.run(params);
        } else {
          await requestAdd.run(params);
        }
        return true;
      }}
    >
      <ProFormText
        name="categoryName"
        label="分类名称"
        width="md"
        rules={[{ required: true, message: '请填写分类名称' }]}
      ></ProFormText>
      <ProFormSelect name="categoryParentId" label="上级分类" width="md"></ProFormSelect>
      <ProFormSwitch
        name="status"
        label="状态"
        checkedChildren="开启"
        unCheckedChildren="关闭"
      ></ProFormSwitch>
    </DrawerForm>
  );
}
