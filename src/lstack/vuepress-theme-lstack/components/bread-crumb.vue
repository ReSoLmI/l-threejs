<template>
  <nav v-if="config.length > 1" class="breadcrumb" :class="{ disable: !enable }">
    <ol vocab="https://schema.org/" typeof="BreadcrumbList">
      <li
        v-for="(item, index) in config"
        :key="item.url"
        :class="{ 'is-active': config.length - 1 === index }"
        property="itemListElement"
        typeof="ListItem"
      >
        <RouterLink :to="item.url" property="item" typeof="WebPage">
          <i v-if="item.icon && iconEnable" :class="`iconfont ${iconPrefix}${item.icon}`" />
          <span property="name">{{ item.title }}</span>
        </RouterLink>
        <meta property="position" :content="index + 1" />
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'BreadCrumb',

    computed: {
      enable() {
        const globalEnable = this.$themeConfig.breadcrumb !== false
        const pageEnable = this.$page.frontmatter.breadcrumb

        return true
        // return ((globalEnable && pageEnable !== false) || pageEnable === true) && this.config.length > 1
      },

      iconEnable() {
        const globalEnable = this.$themeConfig.breadcrumbIcon !== false
        const pageEnable = this.$page.frontmatter.breadcrumbIcon

        return this.enable && ((globalEnable && pageEnable !== false) || pageEnable === true)
      },

      iconPrefix() {
        const { iconPrefix } = this.$themeConfig

        return iconPrefix === '' ? '' : iconPrefix || 'icon-'
      },

      config() {
        const breadcrumbConfig = []
        const { pages = [] } = this.$site
        const links = this.getLinks()

        const pageMap = pages.reduce((prev, current) => {
          const { title, path, regularPath } = current
          prev[regularPath] = { title, path, regularPath }
          return prev
        }, {})

        // generate breadcrumb config
        links.forEach((link = '') => {
          const element = pageMap[link]
          if (element) {
            breadcrumbConfig.push({
              title: element.title,
              url: element.path,
            })
          }
        })

        return breadcrumbConfig
      },
    },

    methods: {
      getLinks() {
        const { regularPath = '' } = this.$page
        const routePaths = regularPath.split('/')
        const realRoutePaths = routePaths.filter(item => {
          return item !== 'index.html'
        })
        const links = []
        let link = ''

        realRoutePaths.forEach((element = '', index) => {
          link += element === '' ? '/' : `/${element}`
          link = link.replace('//', '/')
          let realLink = link
          if (!realLink.endsWith('.html')) {
            realLink += realLink === '/' ? 'index.html' : '/index.html'
          }
          links.push(realLink)
        })

        return links
      },
    },
  }
</script>

<style lang="stylus">
  @require '~@mr-hope/vuepress-shared/styles/wrapper'

  $navbarMobileHeight ?= 3.2rem

  // Fix top boarder of heading1
  .theme-default-content:not(.custom)
    > *:first-child
      margin-top 0

  h1, h2, h3, h4, h5, h6
    .theme-default-content:not(.custom) &:first-child
      margin-top 0.5rem - $navbarHeight !important
      padding-top $navbarHeight !important

      @media (max-width $MQMobile)
        margin-top 0.5rem - $navbarMobileHeight !important
        padding-top $navbarMobileHeight !important

  .breadcrumb
    font-size 15px
    z-index 2

    @media (max-width $MQMobile)
      font-size 14px

    @media (max-width $MQMobileNarrow)
      font-size 12.8px

    // breadcrumb is disabled
    &.disable
      padding-bottom 1.3em

    ol
      margin 0
      padding-left 0px
      list-style none

    li
      display inline-block

      &:first-child a
        padding-left 0

      &:last-child a
        padding-right 0

      &.is-active a
        color var(--light-grey, #999)
        cursor default
        pointer-events none

    li + li::before
      color var(--light-grey, #999)
      content '/'

    a
      display inline-block
      padding 0 0.5em
      line-height 2

      &:before
        position relative
        bottom 0.125rem
        margin-right 0.25em

      &:hover
        color var(--accent-color-l10, lighten($accentColor, 10%))

        .theme-dark &
          color var(--accent-color-d10, darken($accentColor, 10%))
</style>
