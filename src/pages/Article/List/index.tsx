import { DEFAULT_PROTABLE_OPTIONS } from '@/constants';
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, Popconfirm, Tooltip } from 'antd';
import { useMemo, useRef, useState } from 'react';

import { productPages, productRemove } from '@/services/productApi';
import dayjs from 'dayjs';

import CategoryEditDrawer from './components/EditDrawer';

/**
 * 文章管理
 */
export default function ProductListPage() {
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [editRecord, setEditRecord] = useState<string | number>('');
  const tableActionRef = useRef<ActionType | null>();
  const requestRemove = useRequest(productRemove, {
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
        fixed: 'left',
      },
      {
        dataIndex: 'icon',
        title: '文章图标',
        valueType: 'image',
        hideInSearch: true,
      },
      {
        dataIndex: 'productName',
        title: '文章标题',
        copyable: true,
      },
      {
        dataIndex: 'author',
        title: '文章作者',
        copyable: true,
      },
      {
        dataIndex: 'createTime',
        title: '创建时间',
        hideInSearch: true,
      },
      {
        dataIndex: 'createTime',
        title: '创建时间',
        hideInTable: true,
        valueType: 'dateRange',
        search: {
          // 转换一下时间范围的字段，也可以用dayjs格式化日期
          transform: (value) => {
            return {
              startDate: value[0],
              endDate: value[1],
            };
          },
        },
        fieldProps: {
          disabledDate: (current: Date) => {
            return current && dayjs(current).isAfter(dayjs());
          },
        },
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
        fixed: 'right',
        render: (_, row) => [
          <Tooltip key="edit" title="编辑">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => {
                setEditRecord(row.id);
                setOpenEditDrawer(true);
              }}
            ></Button>
          </Tooltip>,
          <Popconfirm
            key="delete"
            okType="danger"
            title="删除当前文章"
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
    <PageContainer title="文章管理">
      <ProTable
        {...DEFAULT_PROTABLE_OPTIONS}
        actionRef={tableActionRef}
        columns={columns}
        request={(params) => productPages({ ...params, status: params.status ? 1 : 0 })}
        toolbar={{
          title: '文章列表',
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
          setEditRecord('');
        }}
      />
    </PageContainer>
  );
}
