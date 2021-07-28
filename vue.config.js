const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 9500,
    public: 'dev.rvandco.fr',
    disableHostCheck: false,
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
}
