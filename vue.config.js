const path = require('path')
console.log(path.resolve(__dirname, 'src/assets/styles/modifyVars.less'))
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // 'text-color': '#111',
          // blue: '#f00',
          // 'border-color': '#eee'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: "true; @import '" + path.resolve(__dirname, 'src/assets/styles/modifyVars.less') + "'"
          // hack: `@import ${path.resolve(__dirname, '/assets/styles/modifyVars.less')};`
        }
      }
    }
  },
  productionSourceMap: true,
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
