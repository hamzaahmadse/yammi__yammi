
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.prettify = false
        return options
      })
  }
}
