<template>
  <header class="navbar" :class="{ 'can-hide': canHide }">
    <slot name="start" />
    <sidebar-button @toggle-sidebar="$emit('toggle-sidebar')" />
    <navbar-logo />

    <slot name="center" />

    <div :style="linksWrapMaxWidth ? { 'max-width': `${linksWrapMaxWidth}px` } : {}" class="links">
      <SearchBox v-if="$themeConfig.search !== false && $page.frontmatter.search !== false" />

      <slot name="end" />
    </div>
  </header>
</template>

<script>
  import SidebarButton from '@theme/components/navbar/sidebar-button.vue'
  import NavbarLogo from '@theme/components/navbar/navbar-logo'
  import SearchBox from '@SearchBox'

  let handler = () => {}

  const css = (el, property) => {
    const window = el.ownerDocument.defaultView

    return window.getComputedStyle(el, null)[property]
  }

  export default {
    name: 'Navbar',
    components: {
      NavbarLogo,
      SearchBox,
      SidebarButton,
    },
    data() {
      return {
        linksWrapMaxWidth: 0,
        isMobile: false,
      }
    },
    computed: {
      siteBrandTitle() {
        return this.$site.title
      },

      canHideSiteBrandTitle() {
        return Boolean(this.siteBrandTitle) && this.$themeConfig.hideSiteTitleonMobile !== false
      },

      siteBrandLogo() {
        const { logo } = this.$themeConfig

        return logo ? this.$withBase(logo) : ''
      },

      siteBrandDarkLogo() {
        const { darkLogo } = this.$themeConfig

        return darkLogo ? this.$withBase(darkLogo) : ''
      },

      algoliaConfig() {
        return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || false
      },

      isAlgoliaSearch() {
        return Boolean(this.algoliaConfig && this.algoliaConfig.apiKey && this.algoliaConfig.indexName)
      },

      canHide() {
        const autoHide = this.$themeConfig.navAutoHide

        return autoHide !== 'none' && (autoHide === 'always' || this.isMobile)
      },
    },

    mounted() {
      // Refer to config.styl
      const MOBILE_DESKTOP_BREAKPOINT = 719
      const NAVBAR_HORIZONTAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))

      handler = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          this.isMobile = true
          this.linksWrapMaxWidth = 0
        } else {
          this.isMobile = false
          this.linksWrapMaxWidth =
            this.$el.offsetWidth -
            NAVBAR_HORIZONTAL_PADDING -
            ((this.$refs.siteInfo && this.$refs.siteInfo.$el && this.$refs.siteInfo.$el.offsetWidth) || 0)
        }
      }

      handler()
      window.addEventListener('resize', handler)
      window.addEventListener('orientationchange', handler)
    },

    // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
    beforeDestroy() {
      window.removeEventListener('resize', handler)
      window.removeEventListener('orientationchange', handler)
    },
  }
</script>

<style lang="stylus">
  .navbar
    position fixed
    z-index 200
    top 0
    left 0
    right 0
    height $navbarHeight
    padding 0 20px
    background var(--bgcolor)
    box-sizing border-box
    box-shadow 0 2px 8px var(--card-shadow-color)
    backdrop-filter saturate(200%) blur(20px)
    line-height: $navbarHeight - $navbarVerticalPadding * 2
    transition transform 0.3s ease-in-out
    display flex
    align-items center

    @media (max-width $MQMobile)
      height $navbarMobileHeight
      padding $navbarMobileVerticalPadding $navbarMobileHorizontalPadding
      padding-left: $navbarMobileHorizontalPadding + 2.4rem
      line-height: $navbarMobileHeight - $navbarMobileVerticalPadding * 2

    .hide-navbar &.can-hide
      transform translateY(-100%)

    a, span, img
      display inline-block

    .logo
      min-width: $navbarHeight - $navbarVerticalPadding * 2
      height: $navbarHeight - $navbarVerticalPadding * 2
      margin-right 0.8rem
      vertical-align top

      @media (max-width $MQMobile)
        min-width: $navbarMobileHeight - $navbarMobileVerticalPadding * 2
        height: $navbarMobileHeight - $navbarMobileVerticalPadding * 2

      .theme-light &
        &.light
          display block

        &.dark
          display none

      .theme-dark &
        &.light
          display none

        &.dark
          display block

    .can-hide
      @media (max-width $MQMobile)
        display none

    .site-name
      font-size 1.5rem
      color var(--text-color)
      position relative

      @media (max-width $MQMobile)
        width calc(100vw - 9.4rem)
        overflow hidden
        white-space nowrap
        text-overflow ellipsis

    .links
      position absolute
      top $navbarVerticalPadding
      right $navbarHorizontalPadding
      display flex
      box-sizing border-box
      padding-left 1.5rem
      font-size 0.9rem
      white-space nowrap

      @media (max-width $MQMobile)
        padding-left 0
        top $navbarMobileVerticalPadding
        right $navbarMobileHorizontalPadding
</style>
