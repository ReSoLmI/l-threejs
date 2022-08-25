<template>
  <main class="page">
    <!--    <my-transition>-->
    <!--      <bread-crumb :key="$route.path" />-->
    <!--    </my-transition>-->

    <slot name="top" />

    <page-header />

    <template>
      <my-transition :delay="0.12">
        <anchor :key="$route.path" />
      </my-transition>

      <!--      <slot v-if="!pagePassword || pageDescrypted" name="content-top" />-->

      <my-transition :delay="0.08">
        <Content :key="$route.path" class="theme-default-content" />
      </my-transition>

      <slot name="content-bottom" />

      <my-transition :delay="0.14">
        <page-nav :key="$route.path" v-bind="{ sidebarItems }" />
      </my-transition>
    </template>

    <slot name="bottom" />

    <!--    <page-footer :key="$route.path" />-->
  </main>
</template>

<script>
  import Anchor from '@theme/components/anchor.vue'
  import MyTransition from '@theme/components/my-transition.vue'
  // import PageInfo from "@mr-hope/vuepress-plugin-comment/lib/client/PageInfo.vue";
  import BreadCrumb from '@theme/components/bread-crumb.vue'
  import PageMeta from '@theme/components/page-update-time.vue'
  import PageNav from '@theme/components/page-nav.vue'
  import PageHeader from '@theme/components/page-header.vue'
  import PageFooter from '@theme/components/page-footer.vue'
  // import Password from "@theme/components/Password.vue";
  // import { pathEncryptMixin } from "@theme/mixins/pathEncrypt";
  //
  // import type { PageHeader } from "@mr-hope/vuepress-types";
  // import type { PropType } from "vue";
  // import type { SidebarItem } from "@theme/utils/sidebar";

  export default {
    name: 'Page',

    components: {
      Anchor,
      MyTransition,
      BreadCrumb,
      // PageInfo,
      PageMeta,
      PageNav,
      PageHeader,
      PageFooter,
      // Password,
    },

    props: {
      sidebarItems: { type: Array, default: () => [] },
      headers: { type: Array, default: () => [] },
    },

    data() {
      return {
        password: '',
      }
    },

    computed: {
      pagePassword() {
        const { password } = this.$frontmatter

        return typeof password === 'number' ? password.toString() : typeof password === 'string' ? password : ''
      },

      pageDescrypted() {
        return this.password === this.pagePassword
      },
    },
  }
</script>

<style lang="stylus">
  .page
    display block
    box-sizing border-box
    min-height 100vh
    padding-left $sidebarWidth
    padding-bottom 2rem
    margin-top $navbarHeight
    background var(--bgcolor)

    @media (max-width $MQMobile)
      min-height 100vh

    // narrow desktop / iPad
    @media (max-width $MQNarrow)
      padding-left $mobileSidebarWidth
      margin-top $navbarMobileHeight

    // wide mobile
    @media (max-width $MQMobile)
      padding-left 0

    @media (min-width $MQMobile)
      .theme-container:not(.has-sidebar) &
        padding-left 0

    @media (min-width $MQWide)
      .has-anchor &:not(.blog)
        padding-right 16rem
</style>
