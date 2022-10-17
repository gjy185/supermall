const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [],
// 配置路由的别名 方便使用
      alias: {
        // 'assets': '@/assets',
        // 'common': '@/common',
        // 'components': '@/components',
        // 'network': '@/network',
        // 'views': '@/views',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
})
