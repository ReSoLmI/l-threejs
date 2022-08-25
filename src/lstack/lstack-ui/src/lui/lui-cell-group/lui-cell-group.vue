<template>
  <div class="lui-cell-group">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'LuiCellGroup',
  }
</script>
<style lang="scss">
  .lui-cell-group {
    display: inline-table;

    > * {
      display: table-cell !important;
      text-align: center;
      vertical-align: middle;
    }
  }
</style>
