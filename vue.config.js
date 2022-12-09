const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // publicPath:"../dist/"
  publicPath:"/"
  // configureWebpack: {
  //   devServer: {
  //     watchOptions: {
  //       ignored: [/node_modules/, /public/],
  //     }
  //   }
  // }
})
