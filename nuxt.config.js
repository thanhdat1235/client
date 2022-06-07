import colors from "vuetify/es5/util/colors";
import Vue from "vue";
import Vuelidate from "vuelidate";
const path = require("path");
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");
const CKEditorStyles = require("@ckeditor/ckeditor5-dev-utils").styles;
Vue.use(Vuelidate);

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head

  env: {
    browser: true,
    node: true,
  },

  head: {
    title: "Addy Print",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/ckeditor.js",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: {
  //   ckeditor: CKEditor.component,
  // },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],
    plugins: [
      // If you set ssr: true that will cause the following error. This error does not affect the operation.
      // ERROR  [CKEditorWebpackPlugin] Error: No translation has been found for the zh language.
      new CKEditorWebpackPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: "vi",
        additionalLanguages: "all",
        addMainLanguageTranslationsToAllAssets: true,
      }),
    ],
    // If you don't add postcss, the CKEditor css will not work.
    postcss: CKEditorStyles.getPostCssConfig({
      themeImporter: {
        themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
      },
      minify: true,
    }),
    extend(config, ctx) {
      // If you do not exclude and use raw-loader to load svg, the following errors will be caused.
      // Cannot read property 'getAttribute' of null
      const svgRule = config.module.rules.find((item) => {
        return /svg/.test(item.test);
      });
      svgRule.exclude = [path.join(__dirname, "node_modules", "@ckeditor")];
      // add svg to load raw-loader
      config.module.rules.push({
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: ["raw-loader"],
      });
    },
  },
  loaders: [
    {
      test: /\.js$/,
      loader: "babel",
      option: { generatorOpts: { compact: false } },
    },
  ],
};
