<template>
  <div class="around-layout-page-template">
    <div class="left" :style="{ width: leftWidth + 'px' }">
      <slot name="leftActions"></slot>
      <slot name="leftContent"></slot>
    </div>
    <index-page-template
      class="right"
      :title="title"
      :title-tip="titleTip"
      :header-introduction="headerIntroduction"
      :header-sheet-value="headerSheetValue"
      :header-sheet-options="headerSheetOptions"
      :header-sheet-option-value-key="headerSheetOptionValueKey"
      :header-sheet-option-label-key="headerSheetOptionLabelKey"
      :header-sheet-select-value-key="headerSheetSelectValueKey"
      :header-sheet-value-initialize-api="headerSheetValueInitializeApi"
      :header-sheet-option-disable="headerSheetOptionDisable"
      :header-sheet-option-forward-action-key="headerSheetOptionForwardActionKey"
      :header-sheet-option-forward-action-api="headerSheetOptionForwardActionApi"
      :header-sheet-option-forward-to-key="headerSheetOptionForwardToKey"
      :header-sheet-option-forward-to-api="headerSheetOptionForwardToApi"
      :header-sheet-label-map-api="headerSheetLabelMapApi"
      :page-stack-class="pageStackClass"
      @update:headerSheetValue="val => $emit('update:headerSheetValue', val)"
      @headerSheetChange="val => $emit('headerSheetChange', val)"
    >
      <template v-if="$scopedSlots.headerActions" #headerActions>
        <slot name="headerActions" />
      </template>
      <template v-if="$scopedSlots.headerSheet" #headerSheet>
        <slot name="headerSheet" />
      </template>
      <template v-if="$scopedSlots.headerIntroduction" #headerIntroduction>
        <slot name="headerIntroduction" />
      </template>
      <slot />
    </index-page-template>
  </div>
</template>

<script>
  import IndexPageTemplate from '../index-page-template'

  export default {
    name: 'AroundLayoutPageTemplate',
    components: { IndexPageTemplate },
    props: {
      leftWidth: { type: Number, default: 220 },
      title: String,
      titleTip: String,
      subtitle: String,
      subtitleTip: String,
      headerIntroduction: String,
      pageStackClass: String,
      innerSheet: Boolean,
      headerSheetValue: {},
      headerSheetOptions: Array,
      headerSheetOptionValueKey: String,
      headerSheetOptionLabelKey: String,
      headerSheetSelectValueKey: String,
      headerSheetValueInitializeApi: Function,
      headerSheetOptionDisable: Function,
      headerSheetOptionForwardActionKey: String,
      headerSheetOptionForwardActionApi: [String, Function],
      headerSheetOptionForwardToKey: String,
      headerSheetOptionForwardToApi: [String, Object, Function],
      headerSheetLabelMapApi: [Object, Array, Function],
    },
  }
</script>
<style lang="scss">
  .around-layout-page-template {
    display: flex;
    height: 100%;
    background: #f7f9ff;
    .left {
      padding: 20px;
      overflow-x: hidden;
      background: #fff;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
    }
    .right {
      flex: 1;
      overflow-x: hidden;
    }
  }
</style>
