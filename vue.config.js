// vue.config.js
module.exports = {
  configureWebpack: {
      externals: {
          experiments: {
              asyncWebAssembly: true,
          }
      }
  }
}