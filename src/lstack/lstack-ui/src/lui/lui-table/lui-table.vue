<template>
  <el-table
    ref="table"
    v-loading="loading"
    class="lui-table"
    size="small"
    border
    :row-key="rowKey"
    :data="data"
    :span-method="spanMethod"
    v-bind="$attrs"
    @select-all="handleSelectAll"
    @selection-change="handleSelectionChange"
  >
    <template v-if="showSelection">
      <el-table-column v-if="isSingleSelection" #default="{ row }" width="34px">
        <el-radio
          v-model="radioSelection"
          :disabled="!cSelectable(row)"
          class="lui-table__single-selection"
          :label="isFunction(rowKey) ? rowKey(row) : rowKey ? get(row, rowKey) : row"
          @change.native="onRadioSingleSelectionChange(row)"
        />
      </el-table-column>
      <el-table-column
        v-else
        type="selection"
        :selectable="cSelectable"
        width="40px"
        :reserve-selection="reserveSelection"
      />
    </template>
    <template v-if="needDefaultRender">
      <el-table-column v-for="key in keys" :key="key" :prop="key" :label="kvMap[key]" />
    </template>
    <slot />
    <template #append>
      <slot name="append"></slot>
    </template>
    <template #empty>
      <slot name="empty"></slot>
    </template>
  </el-table>
</template>
<script>
  import { isNotEmptyArray, isNotEmptyObject, isFunction, isNumber, isArray, get } from '@lstack/utils'

  export default {
    name: 'LuiTable',
    props: {
      loading: Boolean,
      data: Array,
      kvMap: Object,
      keys: {
        type: Array,
        default() {
          return []
        },
      },
      spanMethod: Function,
      border: { type: Boolean, default: true },
      showSelection: Boolean,
      maxSelection: Number,
      reserveSelection: Boolean,
      selectable: { type: Function, default: row => true },
      rowKey: [Function, String],
    },
    data() {
      return {
        selection: [],
        radioSelection: undefined,
      }
    },
    computed: {
      needDefaultRender() {
        return isNotEmptyObject(this.kvMap) && isNotEmptyArray(this.keys)
      },
      isSelectionMax() {
        if (!isNumber(this.maxSelection)) {
          return false
        }
        return this.selection.length >= this.maxSelection
      },
      isSelectionOverMax() {
        if (!this.isSelectionMax) {
          return false
        }
        return this.selection.length > this.maxSelection
      },
      isSingleSelection() {
        return this.maxSelection === 1
      },
    },
    methods: {
      get,
      isFunction,
      cSelectable(row) {
        if (!this.isSingleSelection && this.isSelectionMax) {
          const result = this.selection.find(selected => {
            return selected === row
          })
          if (result === undefined) return false
        }
        if (isFunction(this.selectable)) {
          return this.selectable(row)
        }
        return true
      },
      handleSelectionChange(selection) {
        if (isArray(selection)) {
          this.selection = selection
        }
        this.$emit('selection-change', selection)
        if (this.isSelectionOverMax) {
          this.handleSelectionOverMax(selection)
        }
      },
      handleSelectAll(selection) {
        if (this.isSelectionOverMax) {
          this.handleSelectionOverMax(selection)
        }
      },
      handleSelectionOverMax(selection) {
        this.$refs.table.clearSelection()
        this.$message.warning(`???????????? ${selection.length} ???????????????????????? ${this.maxSelection}??????????????????`)
      },
      onRadioSingleSelectionChange(row) {
        this.$refs.table.clearSelection()
        this.$refs.table.toggleRowSelection(row)
      },
    },
  }
</script>
<style lang="scss">
  @import './lui-table.var';

  .lui-table {
    &.el-table {
      color: $lui-table--color;
      background-color: $lui-table--background-color;

      thead {
        color: $lui-table-thead--color;
      }

      &.el-table--mini td {
        padding: $lui-table-td__mini-vertical--padding 0;
      }
      &.el-table--mini th {
        padding: $lui-table-th__mini-vertical--padding 0;
      }

      &.el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: $lui-table-td__hover--background-color;
      }

      // ?????????????????????
      &.el-table--border {
        border: $lui-table__border--border-width solid $lui-table__border--border-color;
        border-right: none;
        border-bottom: $lui-table-border-bottom__border--width solid $lui-table-border-bottom__border--color;

        &::after {
          width: $lui-table-border-right__border--width;
          background-color: $lui-table-border-right__border--color;
        }

        // ?????????
        td {
          border-right: none;
        }
        th {
          line-height: 1;
          border-right: $lui-table-td--border-right-width solid $lui-table-td--border-right-color;
          // border-right: none;
        }
      }

      .el-table__expanded-cell {
        background-color: unset;
      }

      .el-table__column-resize-proxy {
        border-left: $lui-table-column-resize-proxy--width dashed $lui-table-column-resize-proxy--color;
      }

      // ?????????????????????
      &::before {
        height: unset;
        background-color: unset;
      }
      // ?????????
      td {
        border-bottom: $lui-table-td--border-bottom-width solid $lui-table-td--border-bottom-color;
      }
      // ??????
      tr {
        background-color: $lui-table-tr--background-color;
      }

      th {
        background-color: $lui-table-th--background-color;
        border-bottom: $lui-table-th--border-bottom-width solid $lui-table-th--border-bottom-color;
        & > .cell {
          white-space: nowrap;
        }
      }

      .cell {
        line-height: $lui-table-cell--line-height;
      }
    }
  }
  .lui-table__single-selection.el-radio > .el-radio__label {
    display: none;
  }
</style>
