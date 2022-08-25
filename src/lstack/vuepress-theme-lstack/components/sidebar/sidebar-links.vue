<template>
  <ul v-if="items.length" class="sidebar-links">
    <li v-for="(item, index) in items" :key="index">
      <sidebar-group
        v-if="item.type === 'group'"
        :item="item"
        :open="index === openGroupIndex"
        :depth="depth"
        @toggle="toggleGroup(index)"
      />
      <sidebar-link v-else :item="item" />
    </li>
  </ul>
</template>

<script>
  import SidebarGroup from '@theme/components/sidebar/sidebar-group.vue'
  import SidebarLink from '@theme/components/sidebar/sidebar-link.vue'
  import { isActive } from '@theme/utils/path'

  const descendantIsActive = (route, item) => {
    if (item.type === 'group')
      return item.children.some(child => {
        if (child.type === 'group') return descendantIsActive(route, child)

        return child.type === 'page' && isActive(route, child.path)
      })

    return false
  }

  const resolveOpenGroupIndex = (route, items) => {
    for (let i = 0; i < items.length; i++) if (descendantIsActive(route, items[i])) return i

    return -1
  }

  export default {
    name: 'SidebarLinks',

    components: { SidebarGroup, SidebarLink },

    props: {
      items: {
        type: Array,
        required: true,
      },
      depth: { type: Number, required: true },
    },

    data: () => ({
      openGroupIndex: 0,
    }),

    watch: {
      $route() {
        this.refreshIndex()
      },
    },

    created() {
      this.refreshIndex()
    },

    methods: {
      refreshIndex() {
        const index = resolveOpenGroupIndex(this.$route, this.items)

        if (index > -1) this.openGroupIndex = index
      },

      toggleGroup(index) {
        this.openGroupIndex = index === this.openGroupIndex ? -1 : index
      },

      isActive(page) {
        return isActive(this.$route, page.regularPath)
      },
    },
  }
</script>
