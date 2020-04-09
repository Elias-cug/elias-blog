const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: (config) => {
    Object.assign(config, {
      resolve: {
        // 别名配置
        alias: {
          '@': resolve('src')
        }
      }
    })
  }
}
