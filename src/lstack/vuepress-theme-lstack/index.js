const getPluginConfig = themeConfig => {
  return [
    ['@mr-hope/git', themeConfig.git],
    ['@vuepress/last-updated'],
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    'vuepress-plugin-export',
    '@vuepress/back-to-top',
    // [
    //   'vuepress-plugin-clean-urls',
    //   {
    //     normalSuffix: '.html',
    //     indexSuffix: '/index.html',
    //     notFoundPath: '/404.html',
    //   },
    // ],
    // [
    //   'vuepress-plugin-redirect',
    //   {
    //     // 提供多语言重定向功能
    //     // 它会自动从 `/foo/bar/` 定向到 `/:locale/foo/bar/`，如果对应的页面存在
    //     locales: true,
    //   },
    // ],
    [
      'vuepress-plugin-medium-zoom',
      {
        options: {
          background: 'rgba(0,0,0,0.8)',
        },
      },
    ],
    [
      '@mr-hope/smooth-scroll',
      themeConfig.smoothScroll === false
        ? false
        : typeof themeConfig.smoothScroll === 'number'
        ? { delay: themeConfig.smoothScroll }
        : themeConfig.smoothScroll || { delay: 500 },
    ],
    ['active-hash', themeConfig.activeHash],
  ]
}

// Theme API.
module.exports = (options, ctx) => {
  return {
    plugins: getPluginConfig(options),
  }
}
