const { defineConfig } = require('@vue/cli-service')
// webpack在进行打包的时候，底层用到了node.js
// 因此，在vue.config.js配置文件中，可以导入并使用node.js中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

module.exports = defineConfig({
  transpileDependencies: true,
  // 指定端口
  devServer: {
    port: 3064
  },
  // 指定路径
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color': '#007bff',
            // 'nav-bar-title-font-size': '18px',
            // 'nav-bar-title-text-color': '#fff'

            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}" ;`
          }
        }
      }
    }
  }
})
