// router.options.js

import type { RouterConfig } from "nuxt/schema";

export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'root',
      path: '/',
      children: [
        {
          name: 'home',
          path: '',
          component: () => import('~/pages/index.vue').then(r => r.default || r),
        },
        {
          name: 'tools',
          path: 'tools',
          children: [
            {
              name: 'tools-home',
              path: '',
              component: () => import('~/pages/tools/index.vue').then(r => r.default || r),
            },
            {
              name: 'tools-ui',
              path: 'ui',
              component: () => import('~/pages/tools/ui/index.vue').then(r => r.default || r),
            },
          ]
        },
        {
          name: 'login',
          path: 'login',
          component: () => import('~/pages/auth/login.vue').then(r => r.default || r),
          meta: { layout: 'login' }
        },
        {
          name: 'register',
          path: 'register',
          component: () => import('~/pages/auth/register.vue').then(r => r.default || r),
          meta: { layout: 'login' }
        }
      ]
    },
  ],
}
