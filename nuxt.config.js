const baseURL = 'https://www.abdtaxaccounting.com';
const siteName = 'ABD Tax Accounting LLC';

module.exports = {
  modules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-127256859-1'
    }]
  ],

  /*
  ** Environment Variables
  */
  env: {
    baseURL: baseURL,
    siteName: siteName
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'abdtaxaccounting.com',
    titleTemplate: '%s | ' + siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossorigin: 'anonymous'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css', integrity: 'sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg', crossorigin: 'anonymous'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Generate Sitemap
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseURL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
