<template>
  <rl-close ref="closeRef" action="closePage" :before-close="beforeClose" :before-close-async="beforeCloseAsync">
    <div ref="lui-drawer" class="lui-drawer">
      <div class="header">
        <span class="title">{{ title }}</span>
        <div>
          <lui-button v-show="bodyVisible" shape="square" icon="lui-icon-zoom-out" @click="drawerMinimize" />
          <lui-button v-show="!bodyVisible" shape="square" icon="lui-icon-zoom-in" @click="drawerMaximize" />
          <lui-button shape="square" icon="lui-icon-close" @click="close" />
        </div>
      </div>
      <div :class="['body', bodyVisible ? 'normal-body' : 'hidden-body']">
        <slot v-bind="slotScopeProps"></slot>
      </div>
    </div>
  </rl-close>
</template>

<script>
  import { isFunction } from '@lstack/utils'
  import ProvideClose from '../../mixin/provide-close'
  // 想做成弹框类全局事件，使用消息控制打开
  export default {
    name: 'LuiDrawer',
    mixins: [ProvideClose],
    props: {
      title: { type: String, default: '任务管理器' },
      // 返回值为是否拦截该 forward 事务，true 为拦截，不往下继续执行
      beforeClose: Function,
      beforeCloseAsync: Function,
      handleDrawerMinimize: Function,
      handleDrawerMaximize: Function,
    },
    data() {
      return {
        bodyVisible: true,
      }
    },
    computed: {
      slotScopeProps() {
        return { close: this.close, drawerMinimize: this.drawerMinimize, drawerMaximize: this.drawerMaximize }
      },
    },
    methods: {
      close() {
        this.$refs.closeRef.close()
      },
      minimize() {
        if (this.bodyVisible) this.bodyVisible = false
      },
      maximize() {
        if (!this.bodyVisible) this.bodyVisible = true
      },
      // 最小化的方法
      drawerMinimize() {
        if (isFunction(this.handleDrawerMinimize) && this.handleDrawerMinimize(this.minimize)) return
        this.minimize()
      },
      // 最大化的方法
      drawerMaximize() {
        if (isFunction(this.handleDrawerMaximize && this.handleDrawerMaximize(this.maximize))) return
        this.maximize()
      },
    },
  }
</script>

<style lang="scss">
  @import '~@lstack/style-scss/src/token';

  .lui-drawer {
    position: fixed;
    right: 18px;
    bottom: 0;
    z-index: $z-drawer;
    width: 700px;
    background: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 16px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
    }
    .body {
      padding: 0 20px;
    }
    .normal-body {
      height: 463px;
      padding-top: 30px;
      overflow: auto;
    }
    .hidden-body {
      height: 0;
    }
  }
</style>
