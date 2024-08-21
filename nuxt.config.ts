// https://nuxt.com/docs/api/configuration/nuxt-config
import routerConfigs from "./app/router.options"
export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: 'Cinenth',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'CineNth' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'css', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  },
  // Vite config
  vite: {
    server: {
      open: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      }
    }
  },
  // Css
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
  ],
  router: {
    // @ts-ignore
    extendRoutes(routes, resolve) {
      if (routerConfigs && routerConfigs.routes) {
        const additionalRoutes = routerConfigs.routes([]);
        additionalRoutes.forEach(route => {
          routes.push({
            ...route,
            component: resolve(__dirname, route.component),
            meta: route.meta,
          });
        });
      }
    }
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxt/image"
  ],
  colorMode: {
    classSuffix: ''
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
  
})