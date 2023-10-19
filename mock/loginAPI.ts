export default {
  'POST /api/admin/login': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: {
        token: '12312312313',
      },
    });
  },
  'POST /api/admin/logout': (req: any, res: any) => {
    res.json({
      code: 0,
      message: '',
      data: null,
    });
  },
};
