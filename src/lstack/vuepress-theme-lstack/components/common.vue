<template>
  <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <navbar v-if="enableNavbar" @toggle-sidebar="toggleSidebar">
      <template #start>
        <slot name="navbar-start" />
      </template>
      <template #center>
        <slot name="navbar-center" />
      </template>
      <template #end>
        <slot name="navbar-end" />
      </template>
    </navbar>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #center>
        <slot name="sidebar-center" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </sidebar>

    <slot :sidebar-items="sidebarItems" :headers="headers" />

    <page-footer :key="$route.path" />
  </div>
</template>
<script>
  import Navbar from '@theme/components/navbar/navbar.vue'
  import { getSidebarItems } from '@theme/utils/sidebar'
  import PageFooter from '@theme/components/page-footer.vue'
  import Sidebar from '@theme/components/sidebar/sidebar.vue'
  import throttle from 'lodash.throttle'
  // import {PageHeader} from "@mr-hope/vuepress-types";

  export default {
    name: 'Common',

    components: {
      Navbar,
      PageFooter,
      Sidebar,
    },

    props: {
      navbar: { type: Boolean, default: true },
      sidebar: { type: Boolean, default: true },
    },

    data() {
      return {
        isSidebarOpen: false,
        hideNavbar: false,
        touchStart: {
          clientX: 0,
          clientY: 0,
        },
      }
    },

    computed: {
      enableNavbar() {
        if (this.navbar === false) return false

        const { frontmatter } = this.$page

        if (frontmatter.navbar === false || this.$themeConfig.navbar === false) return false

        return (
          this.$title ||
          this.$themeConfig.logo ||
          this.$themeConfig.repo ||
          this.$themeConfig.nav ||
          this.$themeLocaleConfig.nav
        )
      },

      enableSidebar() {
        if (this.sidebar === false) return false

        return !this.$frontmatter.home && this.$frontmatter.sidebar !== false && this.sidebarItems.length !== 0
      },

      sidebarItems() {
        if (this.sidebar === false) return []

        return getSidebarItems(this.$page, this.$site, this.$localePath)
      },

      pageClasses() {
        const userPageClass = this.$page.frontmatter.pageClass

        return [
          {
            'has-navbar': this.enableNavbar,
            'has-sidebar': this.enableSidebar,
            'has-anchor': this.enableAnchor,
            'hide-navbar': this.hideNavbar,
            'sidebar-open': this.isSidebarOpen,
          },
          userPageClass,
        ]
      },

      headers() {
        return this.getHeader(this.sidebarItems)
      },

      enableAnchor() {
        return (
          this.$frontmatter.anchorDisplay ||
          (this.$themeConfig.anchorDisplay !== false && this.$frontmatter.anchorDisplay !== false)
        )
      },
    },

    mounted() {
      let lastDistance = 0

      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })

      window.addEventListener(
        'scroll',
        throttle(() => {
          const distance = this.getScrollTop()

          // scroll down
          if (lastDistance < distance && distance > 58) {
            if (!this.isSidebarOpen) this.hideNavbar = true
            // scroll up
          } else this.hideNavbar = false

          lastDistance = distance
        }, 300)
      )
    },

    methods: {
      /** Get scroll distance */
      getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      },

      toggleSidebar(to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        this.$emit('toggle-sidebar', this.isSidebarOpen)
      },

      // Side swipe
      onTouchStart(event) {
        this.touchStart = {
          clientX: event.changedTouches[0].clientX,
          clientY: event.changedTouches[0].clientY,
        }
      },

      onTouchEnd(event) {
        const dx = event.changedTouches[0].clientX - this.touchStart.clientX
        const dy = event.changedTouches[0].clientY - this.touchStart.clientY

        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40)
          if (dx > 0 && this.touchStart.clientX <= 80) this.toggleSidebar(true)
          else this.toggleSidebar(false)
      },

      getHeader(items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]

          if (item.type === 'group') {
            const matching = this.getHeader(item.children)

            if (matching.length !== 0) return matching
          } else if (item.type === 'page' && item.headers && item.path === this.$route.path) return item.headers
        }

        return []
      },
    },
  }
</script>

<style lang="stylus">
  .theme-container
    min-height 100vh

  .sidebar-mask
    position fixed
    z-index 9
    top 0
    left 0
    width 100vw
    height 100vh
    display none

    .theme-container.sidebar-open &
      display block
</style>
