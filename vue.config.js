module.exports ={
  // 基本路径 (baseUrl 已弃用)
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
  // 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  // 相对 publicPath 有限制 （具体： https://cli.vuejs.org/zh/config/#publicpath）
  publicPath: process.env.NODE_ENV === 'production'
    ? './' // npm run build 时的路径
    : './', // npm run serve 时的路径
  // 输出文件目录
  outputDir: 'dist', // 默认就是这个
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '',
  // 生成的静态资源在它们的文件名中是否包含了 hash
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  devServer: {
    host: 'localhost', // 默认值
    port: 8080,
    // proxy: ''
  },
  // 通过 chainWebpack 调整内联文件的大小限制。
  // 例如，下列代码会将其限制设置为 10kb
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
  },
  // 配置 全局变量
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `assets/css/variables.scss` 这个文件
        // 可以多个引入 `@import "@/assets/css/variables.scss";@import "@/assets/css/variables2.scss";`
        data: `@import "@/assets/css/variables.scss";`
      }
    }
  }
}