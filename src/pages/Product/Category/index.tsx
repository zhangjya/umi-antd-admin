import { DEFAULT_PROTABLE_OPTIONS } from '@/constants';
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Tooltip } from 'antd';
import { useMemo, useRef, useState } from 'react';

import { categoryPages, categoryRemove } from '@/services/productApi';
import { useRequest } from '@umijs/max';
import CategoryEditDrawer from './components/EditDrawer';

/**
 * 商品分类管理
 * @returns
 */
export default function ProductCategoryPage() {
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [editRecord, setEditRecord] = useState<PRODUCT.CategoryModel | null>();
  const tableActionRef = useRef<ActionType | null>();
  const requestRemove = useRequest(categoryRemove, {
    manual: true, // 关闭自动请求
    onSuccess: () => {
      // 重新加载表格
      tableActionRef.current?.reload();
    },
  });

  const columns = useMemo<ProColumns[]>(
    () => [
      {
        dataIndex: 'index',
        valueType: 'indexBorder',
        title: '序号',
        width: 50,
      },
      {
        dataIndex: 'categoryName',
        title: '分类名称',
        copyable: true,
      },
      {
        dataIndex: 'categoryParentName',
        title: '上级分类',
      },
      {
        dataIndex: 'createTime',
        title: '创建时间',
        hideInSearch: true,
      },
      {
        dataIndex: 'status',
        title: '状态',
        valueEnum: {
          1: { text: '启用', status: 'Success' },
          2: { text: '禁用', status: 'Default' },
        },
      },
      {
        title: '操作',
        valueType: 'option',
        width: 90,
        render: (_, row) => [
          <Tooltip key="edit" title="编辑">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => {
                setEditRecord(row);
                setOpenEditDrawer(true);
              }}
            ></Button>
          </Tooltip>,
          <Popconfirm
            key="delete"
            okType="danger"
            title="删除当前分类"
            onConfirm={() => requestRemove.run(row.categoryId)}
            okButtonProps={{
              loading: requestRemove.loading,
            }}
          >
            <Button type="text" danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>,
        ],
      },
    ],
    [requestRemove.loading],
  );

  return (
    <PageContainer title="商品分类">
      <ProTable
        {...DEFAULT_PROTABLE_OPTIONS}
        actionRef={tableActionRef}
        columns={columns}
        request={(params) => categoryPages({ ...params, status: params.status ? 1 : 0 })}
        toolbar={{
          title: '分类列表',
          actions: [
            <Button
              key="add"
              type="primary"
              icon={<PlusCircleOutlined />}
              onClick={() => setOpenEditDrawer(true)}
            >
              新增
            </Button>,
            <Button key="export" type="dashed" icon={<DownloadOutlined />}>
              导出
            </Button>,
          ],
        }}
      ></ProTable>
      <CategoryEditDrawer
        open={openEditDrawer}
        data={editRecord}
        onFinish={() => {
          setOpenEditDrawer(false);
          setEditRecord(null);
        }}
      />
    </PageContainer>
  );
}
