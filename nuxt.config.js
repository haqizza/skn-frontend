export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skn-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    'nuxt-highcharts',
    '@nuxtjs/auth-next',
  ],

  env: {
    assetsUrl : process.env.ASSETS_URL,
  },

  auth: {
    strategies: {
      local: {
        // scheme: "refresh",
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
        // refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
        //   property: "refresh_token", // property name that the Back-end sends for you as a refresh token for saving on localStorage and cookie of user browser
        //   data: "refresh_token", // data can be used to set the name of the property you want to send in the request.
        // },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          // refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false,
          user: { url: "/api/auth/user", method: "get" }
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
    baseURL: 'http://localhost:4000'
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
