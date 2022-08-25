<template>
  <div id="app" class="app-layout">
    <div class="app-layout__content">
      <slot></slot>
    </div>
    <div class="app-layout__popup-stack">
      <lui-page-stack ref="stack" type="popup"></lui-page-stack>
      <lui-page-stack ref="drawerStack" type="openDrawer"></lui-page-stack>
    </div>
  </div>
</template>

<script>
  import LuiPageStack from '../../lui/lui-page-stack'
  import LuiPageStackApiMixin from '../../lui/lui-page-stack/lui-page-stack-api-mixin'
  import ProvideDrawerStack from '../../mixin/provide-drawer-stack'

  export default {
    name: 'AppLayout',
    components: { LuiPageStack },
    mixins: [LuiPageStackApiMixin, ProvideDrawerStack],
    data() {
      return { apiHandlerInstance: undefined }
    },
    mounted() {
      this.apiHandlerInstance = this.$refs.stack
    },
  }
</script>
<style lang="scss">
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .app-layout__content {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
