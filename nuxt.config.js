export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'server',

  head: {
    title: '华邦教育',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '华邦教育' },
      { hid: 'description', name: 'description', content: '华邦教育' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/styles/main.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: "~/plugins/bootstrap.js", ssr: false }
    '~plugins/test.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/proxy"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    prefix: '/api',
    credentials: true
  },

  proxy: {
    '/api': {
      // target: 'http://8.210.230.112:9093',
      target:  'http://localhost:9093',
      pathRewrite: {
        '^/api/': '',
        changeOrigin: true
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extractCSS: {allChunks: true},
  },

  router:{
    mode:'history' // default: history
  },

  server: {
    port: 3003, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
