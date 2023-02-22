const { defineConfig } = require('@vue/cli-service');
const path = require("path");
const tit = "쀼:VUE";
const d = new Date();
const ver = (d.getMonth()+1) +""+ d.getDate() +""+ d.getHours() +""+ d.getMinutes() +""+ d.getSeconds();
module.exports = defineConfig({
  devServer: {
    historyApiFallback: true,
  },
  transpileDependencies: true,
  lintOnSave:false,
  outputDir: path.resolve(__dirname, "./docs/") ,
  publicPath:"",
  configureWebpack: {
    watch: false
  },
  pages: {
    index: { // (1)
      entry: 'src/main.js', // (2)
      template: 'public/index.html', // (3)
      // filename: 'index.html', // (4)
      title: tit, // (5)
      version: ver, // (5)
      // chunks: ['chunk-vendors', 'chunk-common', 'index'] // (6)
    },
  }
});
