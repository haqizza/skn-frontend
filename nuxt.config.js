export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sinar Karya Nusa',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/logo-white.ico' },
    ]
  },

  router: {
    linkExactActiveClass: 'active-menu'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-mdi.js' },
    { src: '~/plugins/carousel-3d.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs:[
      '~/components',
      '~/components/CMS',
      '~/components/Web',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/pwa',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
  },

  pwa: {
    meta: {

    },
    manifest: {
      icons: [

      ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-highcharts',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  env: {
    assetsUrl : process.env.ASSETS_URL,
  },

  auth: {
    strategies: {
      local: {
        // scheme: "refresh",
        // token: {
          // property: "auth-token",
          // global: true,
          // required: true,
          // type: "Bearer"
        // },
        endpoints: {
          login: { url: "/auth", method: "post", propertyName: 'token' },
          user: false,
        }
      }
    }
  },

  highcharts: {

  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  axios: {
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'mdi-vue',
      'vue-carousel-3d'
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
