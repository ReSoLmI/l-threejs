<template>
  <div class="t-frame-left-sidebar-body">
    <lui-side-menu :menus="menus" :collapsed="collapsed" :default-active="defaultActive" />
  </div>
</template>

<script>
  import LuiSideMenu from '../../lui/lui-side-menu/lui-side-menu'

  export default {
    name: 'TFrameLeftSidebarBody',
    components: { LuiSideMenu },
    props: {
      collapsed: Boolean,
      // title,icon,link,divider,items,disabled
      menus: { required: true, type: Array },
      defaultActive: String,
    },
  }
</script>

<style lang="scss">
  .t-frame-left-sidebar-body {
    position: relative;
    width: 100%;
  }
</style>
