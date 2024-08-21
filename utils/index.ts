export const createRoute = (
    name: string, 
    path: string, 
    componentPath: string, 
    layout = 'default'
  ) => ({
    name,
    path,
    component: () => import(`/pages/${componentPath}`).then(r => r.default || r),
    meta: { layout }
  });