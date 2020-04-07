const path = require('path')

module.exports = {
  configureWebpack: (config) => {
    Object.assign(config, {
      resolve: {
        // 别名配置
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    })
  }
}