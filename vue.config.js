module.exports = {
  // lintOnSave: true,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue: 16, // 换算的基数
  //           selectorBlackList: [], // 忽略转换正则匹配项
  //           propList: ['*']
  //         }),
  //         require('autoprefixer')
  //       ]
  //     }
  //   }
  // },
  devServer: {
    port: 3001,
    proxy: {
      // 匹配/rest开头的pathname
      '/rest': {
        // 都转到http://localhost:8080这个origin下，例如：http://localhost:8081/rest/xxx，实际上请求的是http://localhost:8080/rest/xxx
        target: 'http://localhost:8080',
        // 是否允许改变origin，即跨域
        changeOrigin: true
      }
    }
  }
}
