<template>
  <div v-if="prev || next" class="page-nav">
    <p class="inner">
      <span v-if="prev" class="prev">
        <a v-if="prev.type === 'external'" class="prev" :href="prev.path" target="_blank" rel="noopener noreferrer">
          <prev-icon />
          <span class="prev-label">
            {{ $themeConfig.prevLinkLabel }}
          </span>
          {{ prev.title || prev.path }}
          <OutboundLink />
        </a>

        <RouterLink v-else class="prev" :to="prev.path">
          <prev-icon />
          <span class="prev-label">
            {{ $themeConfig.prevLinkLabel }}
          </span>
          {{ prev.title || prev.path }}
        </RouterLink>
      </span>

      <span v-if="next" class="next">
        <a v-if="next.type === 'external'" :href="next.path" target="_blank" rel="noopener noreferrer">
          <span class="next-label">
            {{ $themeConfig.nextLinkLabel }}
          </span>
          {{ next.title || next.path }}
          <OutboundLink />
          <next-icon />
        </a>
        <RouterLink v-else :to="next.path">
          <span class="next-label">
            {{ $themeConfig.nextLinkLabel }}
          </span>
          {{ next.title || next.path }}
          <next-icon />
        </RouterLink>
      </span>
    </p>
  </div>
</template>

<script>
  import NextIcon from '@theme/icons/next-icon.vue'
  import PrevIcon from '@theme/icons/prev-icon.vue'
  import { resolvePath } from '@theme/utils/path'
  import { resolvePageforSidebar } from '@theme/utils/sidebar'

  const getSidebarItems = (items, result) => {
    for (const item of items)
      if (item.type === 'group') getSidebarItems(item.children || [], result)
      else result.push(item)
  }

  const find = (page, items, offset) => {
    const result = []

    getSidebarItems(items, result)

    for (let i = 0; i < result.length; i++) {
      const cur = result[i]

      if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) return result[i + offset]
    }

    return false
  }

  const resolvePageLink = (linkType, { themeConfig, page, route, site, sidebarItems }) => {
    const themeLinkConfig =
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      themeConfig[`${linkType}Links`]
    const pageLinkConfig = page.frontmatter[linkType]

    if (themeLinkConfig === false || pageLinkConfig === false) return false

    if (typeof pageLinkConfig === 'string')
      return resolvePageforSidebar(site.pages, resolvePath(pageLinkConfig, route.path))

    return find(page, sidebarItems, linkType === 'prev' ? -1 : 1)
  }

  export default {
    name: 'PageNav',
    components: { NextIcon, PrevIcon },
    props: {
      sidebarItems: { type: Array, default: () => [] },
    },
    computed: {
      prev() {
        return resolvePageLink('prev', {
          sidebarItems: this.sidebarItems,
          themeConfig: this.$themeConfig,
          page: this.$page,
          route: this.$route,
          site: this.$site,
        })
      },

      next() {
        return resolvePageLink('next', {
          sidebarItems: this.sidebarItems,
          themeConfig: this.$themeConfig,
          page: this.$page,
          route: this.$route,
          site: this.$site,
        })
      },
    },
  }
</script>

<style lang="stylus">
  @require '~@mr-hope/vuepress-shared/styles/wrapper'

  .page-nav
    @extend $wrapper
    padding-top 12px
    padding-bottom 0
    font-family Arial, Helvetica, sans-serif

    .prev-label, .next-label
      @media (max-width $MQMobile)
        display none

    .inner
      min-height 32px
      margin-top 0
      border-top 1px solid var(--border-color)
      padding-top 16px
      overflow auto // clear float

    .prev .icon, .next .icon
      position relative
      top 0.125em
      width 1em
      height 1em
      color var(--accent-color)

    .next
      float right
</style>
