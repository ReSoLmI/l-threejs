<template>
  <div class="t-frame-left-sidebar-header">
    <div class="t-frame-left-sidebar-header__inner">
      <template v-if="!isInner">
        <lui-title
          v-show="!collapsed"
          class="t-frame-left-sidebar-header__title"
          :theme="theme"
          size="s"
          :title="title"
        />
        <lui-icon
          v-show="collapsed"
          class="t-frame-left-sidebar-header__icon"
          type="highlight"
          :theme="theme"
          :icon="icon"
          size="xl"
        />
      </template>
      <template v-else>
        <rl-close bind-el-event action="inject">
          <lui-icon
            class="t-frame-left-sidebar-header__close-button"
            type="highlight"
            :theme="theme"
            icon="el-icon-arrow-left"
            size="s"
          />
        </rl-close>
        <div v-show="!collapsed" class="t-frame-left-sidebar-header__title-tip" :title="title">
          <lui-title class="t-frame-left-sidebar-header__title lui-title" :theme="theme" size="s" :title="title" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import LuiIcon from '../../lui/lui-icon'
  import LuiTitle from '../../lui/lui-title'
  import RlClose from '../../renderless/rl-close'

  export default {
    name: 'TFrameLeftSidebarHeader',
    components: { LuiTitle, LuiIcon, RlClose },
    props: {
      isInner: Boolean,
      collapsed: Boolean,
      title: { type: String, required: true },
      icon: { type: String, required: true },
      theme: { type: String, default: 'dark' },
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@lstack/style-scss/src/token';
  @import './t-frame-left-sidebar-header.var';

  $hover-bg-color: #344258;

  .t-frame-left-sidebar-header {
    position: relative;
    width: 100%;
  }
  .t-frame-left-sidebar-header__inner {
    position: relative;
    display: flex;
    align-items: center;
    height: $t-frame-left-sidebar-header-inner--height;
    padding: 0 $t-frame-left-sidebar-header-inner__horizontal--padding;
    line-height: $t-frame-left-sidebar-header-inner--line-height;
    white-space: nowrap;
  }

  .t-frame-left-sidebar-header__icon {
    position: absolute;
    left: $t-frame-left-sidebar-header-icon__left;
    margin: auto;
  }

  .t-frame-left-sidebar-header__close-button {
    position: relative;
    width: $form-element-small-height;
    height: $form-element-small-height;
    line-height: $form-element-small-height;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: $hover-bg-color;
    }
  }

  .lui-title {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .t-frame-left-sidebar-header__title-tip {
    flex: 1 1;
    width: 100%;
  }
</style>
