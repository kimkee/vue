const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // publicPath:"../dist/",
  configureWebpack: require('./webpack.config.js'), 
  // publicPath:"/"
  // configureWebpack: {
  //   devServer: {
  //     watchOptions: {
  //       ignored: [/node_modules/, /public/],
  //     }
  //   }
  // }
})
