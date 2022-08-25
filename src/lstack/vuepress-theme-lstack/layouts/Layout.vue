<template>
  <common :sidebar="$frontmatter.blog !== true">
    <!--    <template #sidebar-top>-->
    <!--      <slot name="sidebar-top">-->
    <!--        <SidebarTop />-->
    <!--        <Content slot-key="sidebar-top" />-->
    <!--      </slot>-->
    <!--    </template>-->

    <!--    <template #sidebar-center>-->
    <!--      <slot name="sidebar-center">-->
    <!--        <SidebarCenter />-->
    <!--        <Content slot-key="sidebar-center" />-->
    <!--      </slot>-->
    <!--    </template>-->

    <!--        <template #sidebar-bottom>-->
    <!--          <slot name="sidebar-bottom">-->
    <!--            <SidebarBottom />-->
    <!--            <Content slot-key="sidebar-bottom" />-->
    <!--          </slot>-->
    <!--        </template>-->

    <template #default="slotProps">
      <!--      <Home v-if="$frontmatter.home" />-->

      <page :headers="slotProps.headers" :sidebar-items="slotProps.sidebarItems">
        <!--        <template #top>-->
        <!--          <slot name="page-top">-->
        <!--            <PageTop />-->
        <!--            <Content slot-key="page-top" />-->
        <!--          </slot>-->
        <!--        </template>-->

        <!--        <template #content-top>-->
        <!--          <slot name="content-top">-->
        <!--            <ContentTop />-->
        <!--            <Content slot-key="content-top" />-->
        <!--          </slot>-->
        <!--        </template>-->

        <!--        <template #content-bottom>-->
        <!--          <slot name="content-bottom">-->
        <!--            <ContentBottom />-->
        <!--            <Content slot-key="content-bottom" />-->
        <!--          </slot>-->
        <!--        </template>-->

        <!--        <template #bottom>-->
        <!--          <slot name="page-bottom">-->
        <!--            <PageBottom />-->
        <!--            <Content slot-key="page-bottom" />-->
        <!--          </slot>-->
        <!--        </template>-->
      </page>
    </template>
  </common>
</template>

<script>
  // import Vue from 'vue'
  // import BlogInfo from '@BlogInfo'
  // import BlogHome from '@BlogHome'
  // import ContentBottom from '@ContentBottom'
  // import ContentTop from '@ContentTop'
  // import NavbarStart from '@NavbarStart'
  // import NavbarCenter from '@NavbarCenter'
  // import NavbarEnd from '@NavbarEnd'
  // import PageBottom from '@PageBottom'
  // import PageTop from '@PageTop'
  // import SidebarBottom from '@SidebarBottom'
  // import SidebarCenter from '@SidebarCenter'
  // import SidebarTop from '@SidebarTop'
  import Common from '@theme/components/common.vue'
  // import Home from '@theme/components/Home.vue'
  import Page from '@theme/components/page.vue'

  export default {
    name: 'Layout',

    components: {
      // BlogInfo,
      // BlogHome,
      Common,
      // ContentBottom,
      // ContentTop,
      // Home,
      // NavbarCenter,
      // NavbarEnd,
      // NavbarStart,
      Page,
      // PageBottom,
      // PageTop,
      // SidebarBottom,
      // SidebarCenter,
      // SidebarTop,
    },
  }
</script>
