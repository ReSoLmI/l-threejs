export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  // 在所有以 '/' 结尾的页面 regularPath 后加 index.html
  siteData.pages.forEach(item => {
    const { regularPath = '' } = item
    if (regularPath.endsWith('/')) {
      item.regularPath += 'index.html'
    }
  })
}
