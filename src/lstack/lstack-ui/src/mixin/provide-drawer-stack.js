import { logError } from '@lstack/utils'

export default {
  name: 'ProvideDrawerStack',
  provide() {
    return {
      getDrawerStack: this.getDrawerStack,
      openDrawer: this.openDrawer,
      popTopDrawer: this.popTopDrawer,
      popDrawer: this.popDrawer,
      isDrawerStackEmpty: this.isDrawerStackEmpty,
      pIsDrawerStack: false,
    }
  },
  methods: {
    getDrawerStack() {
      if (this.$refs === undefined) {
        logError(`${this.$vnode.tag}.getDrawerStack，页面还未渲染完成，无法获取到 $refs 引用`)
        return undefined
      }
      if (this.$refs.drawerStack === undefined) {
        logError(
          `${this.$vnode.tag}.getDrawerStack $refs.drawerStack 不存在，请确保将 drawerStack 的 ref 指向具体 VNode 实例`
        )
        return undefined
      }
      return this.$refs.drawerStack
    },
    openDrawer(pageComponentInfo = {}, containerInfo = {}) {
      return this.getDrawerStack().openPage(pageComponentInfo, containerInfo)
    },
    popTopDrawer() {
      return this.getDrawerStack().popTopPage()
    },
    isDrawerStackEmpty() {
      return this.getDrawerStack().isStackEmpty()
    },
    popDrawer(index, doNextWhenPopSuccess) {
      return this.getDrawerStack().popPage(index, doNextWhenPopSuccess)
    },
  },
}
