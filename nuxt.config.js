require("dotenv").config();
const { API_KEY } = process.env;
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#"
    },
    title: "Steg Webサイト制作料金見積もりシステム",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Steg Webサイト制作料金見積もりシステム。無料で簡単にWebサイト制作の予算見積もりができます。気に入っていただければそのまま制作依頼をすることができます。"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Steg Webサイト制作料金見積もりシステム"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://quote-steg.netlify.app"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Steg Webサイト制作料金見積もりシステム"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Steg Webサイト制作料金見積もりシステム。無料で簡単にWebサイト制作の予算見積もりができます。気に入っていただければそのまま制作依頼をすることができます。"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://quote-steg.netlify.app/img/ogp.png"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@Steg_official" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        href: "https://fonts.googleapis.com/css?family=Roboto:700",
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/style/reset.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/valueFilter.js",
    { src: "~/plugins/localStorage.js", ssr: false },
    "~plugins/vue-scrollto"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/vuetify"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    API_KEY
  }
};
