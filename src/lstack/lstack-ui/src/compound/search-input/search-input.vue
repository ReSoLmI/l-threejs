<template>
  <lui-cell-group>
    <lui-select
      v-if="hasSearchKeyOptions"
      v-model="cSearchKey"
      class="search-key-select"
      :label-map-api="searchKeyLabelMapApi"
      :options="searchKeyOptions"
      :value-initialize-api="options => options[0]"
    />
    <lui-input
      class="search-input"
      v-bind="$attrs"
      width="120px"
      :no-border-left="hasSearchKeyOptions"
      :placeholder="cPlaceholder"
      :value="value"
      v-on="{ ...$listeners }"
      @keyup.enter.native="handleSearchAction"
    >
      <i slot="suffix" class="el-icon-search el-input__icon" @click="handleSearchAction"></i>
    </lui-input>
  </lui-cell-group>
</template>
<script>
  import { isFunction, isNotEmptyArray, isNotEmptyText, isObject } from '@lstack/utils'
  import LuiCellGroup from '../../lui/lui-cell-group'
  import LuiInput from '../../lui/lui-input'
  import LuiSelect from '../../lui/lui-select'

  export default {
    name: 'SearchInput',
    components: { LuiCellGroup, LuiInput, LuiSelect },
    props: {
      searchAction: Function,
      searchKeyOptions: Array,
      searchKey: String,
      searchKeyLabelMapApi: [Object, Function],
      placeholder: String,
      value: {},
    },
    computed: {
      hasSearchKeyOptions() {
        return isNotEmptyArray(this.searchKeyOptions)
      },
      cPlaceholder() {
        if (this.placeholder) {
          return this.placeholder
        }
        let label
        const searchKey = this.cSearchKey
        if (isObject(this.searchKeyLabelMapApi)) {
          label = this.searchKeyLabelMapApi[searchKey]
        } else if (isFunction(this.searchKeyLabelMapApi)) {
          label = this.searchKeyLabelMapApi(searchKey)
        }
        label = isNotEmptyText(label) ? label : searchKey
        return `按${label}搜索`
      },
      cSearchKey: {
        get() {
          return this.searchKey
        },
        set(value) {
          this.$emit('update:searchKey', value)
        },
      },
    },
    methods: {
      handleSearchAction() {
        if (isFunction(this.searchAction)) {
          return this.searchAction()
        }
        return undefined
      },
    },
  }
</script>
<style lang="scss">
  .search-key-select .el-input__inner {
    width: 100px;
  }
</style>
