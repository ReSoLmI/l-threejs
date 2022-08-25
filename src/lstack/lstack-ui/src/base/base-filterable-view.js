import { isFunction, isObject, logError, get } from '@lstack/utils'
import BaseView from './base-view'

export default {
  name: 'BaseFilterableView',
  extends: BaseView,
  data() {
    return {
      selectedList: [],
      query: {
        searchValue: undefined,
        searchKey: 'name',
      },
      listLoading: undefined,
      tableColumnKeys: [],
      deleteDialog: undefined,
      singleDeleteDialog: undefined,
      infoDialog: undefined,
      infoSidePage: undefined,
      updateDialog: undefined,
      route: undefined,
    }
  },
  computed: {
    noItemSelected() {
      return this.selectedList.length <= 0
    },
    cRoute() {
      if (isObject(this.route)) {
        return this.route
      }
      if (this.$project && this.$project.routeMap) {
        const currentRoute = this.$project.routeMap[this.$route.name]
        if (currentRoute) {
          return currentRoute
        }
      }
      return {}
    },
    cCreateRoute() {
      return get(this.cRoute, 'family.create', {})
    },
    cUpdateRoute() {
      return get(this.cRoute, 'family.update', {})
    },
    cInfoRoute() {
      return get(this.cRoute, 'family.info', {})
    },
    cInfoSidePage() {
      if (this.infoSidePage) {
        return this.infoSidePage
      }
      return this.cInfoRoute.component
    },
  },
  methods: {
    forwardYamlInfoTo(info) {
      return {
        is: this.infoDialog,
        props: { info },
      }
    },
    forwardInfoSidePageTo(info) {
      return {
        is: this.cInfoSidePage,
        props: { info },
        on: {
          updated: () => this.refreshTableAndForwardEvent('updated'),
          deleted: () => this.refreshTableAndForwardEvent('deleted'),
        },
      }
    },
    openDeleteDialog({ list }) {
      this.$popup({
        is: this.deleteDialog,
        props: { list, clusterId: this.query.clusterId },
        on: {
          deleted: () => this.refreshTableAndForwardEvent('deleted'),
        },
      })
    },
    forwardUpdateDialogTo(info) {
      return {
        is: this.updateDialog,
        props: { info },
        on: {
          updated: () => this.refreshTableAndForwardEvent('updated'),
        },
      }
    },
    forwardDeleteDialogTo(list) {
      return {
        is: this.deleteDialog,
        props: { list, clusterId: this.clusterId },
        on: {
          deleted: () => this.refreshTableAndForwardEvent('deleted'),
        },
      }
    },
    forwardSingleDeleteDialogTo(info) {
      return {
        is: this.singleDeleteDialog,
        props: { info },
        on: {
          deleted: () => this.refreshTableAndForwardEvent('deleted'),
        },
      }
    },
    saveSelection(selection) {
      this.selectedList = selection
    },
    selectFirst(optionValues) {
      return optionValues[0]
    },
    refreshTable() {
      const refreshApi = this.get(this.$refs, 'table.refresh', undefined)
      if (isFunction(refreshApi)) {
        refreshApi()
      } else {
        logError(`${this.$vnode.tag}，refreshTable 刷新句柄不存在`)
      }
    },
    refreshTableAndForwardEvent(eventName) {
      this.refreshTable()
      if (eventName) {
        this.$emit(eventName)
      }
    },
    isDeletable(row) {
      return row.deletable
    },
  },
}
