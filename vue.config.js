module.exports = {
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
