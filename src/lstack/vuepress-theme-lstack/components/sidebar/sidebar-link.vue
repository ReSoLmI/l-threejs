<script>
  import { hashRE, isActive } from '@theme/utils/path'
  import { groupSidebarHeaders } from '@theme/utils/sidebar'

  const renderIcon = (h, icon) =>
    icon
      ? h('i', {
          class: ['iconfont', icon],
        })
      : null

  const renderLink = (h, { icon = '', text, link, level, active }) =>
    h(
      'RouterLink',
      {
        props: {
          to: link,
          activeClass: '',
          exactActiveClass: '',
        },
        class: {
          active,
          'sidebar-link': true,
          [level ? `heading${level}` : '']: level && level !== 2,
        },
      },
      [renderIcon(h, icon), text]
    )

  const renderExternalLink = (h, { path, title = path }) =>
    h(
      'a',
      {
        attrs: {
          href: path,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        class: { 'sidebar-link': true },
      },
      [title, h('OutboundLink')]
    )

  const renderChildren = (h, { children, path, route, maxDepth, depth = 1 }) => {
    if (!children || depth > maxDepth) return null

    return h(
      'ul',
      { class: 'sidebar-sub-headers' },
      children.map(child => {
        const active = isActive(route, `${path}#${child.slug}`)

        return h('li', { class: 'sidebar-sub-header' }, [
          renderLink(h, {
            text: child.title,
            link: `${path}#${child.slug}`,
            level: child.level,
            active,
          }),
          renderChildren(h, {
            children: child.children || false,
            path,
            route,
            maxDepth,
            depth: depth + 1,
          }),
        ])
      })
    )
  }

  export default {
    name: 'SidebarLink',

    functional: true,

    props: {
      item: { type: Object, required: true },
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(h, { parent: { $page, $route, $themeConfig, $themeLocaleConfig }, props }) {
      const { item } = props

      // if the item can not be resolved
      if (item.type === 'error') return null

      // external link
      if (item.type === 'external') return renderExternalLink(h, item)

      /*
       * Use custom active class matching logic
       * Due to edge case of paths ending with / + hash
       */
      const selfActive = isActive($route, item.path)

      /** whether the item is active */
      const active =
        // if the item is a heading, then one of the children needs to be active
        item.type === 'header'
          ? selfActive || (item.children || []).some(child => isActive($route, `${item.basePath}#${child.slug}`))
          : selfActive

      const maxDepth =
        $page.frontmatter.sidebarDepth || $themeLocaleConfig.sidebarDepth || $themeConfig.sidebarDepth || 2

      // the item is a heading
      if (item.type === 'header')
        return [
          renderLink(h, {
            text: item.title || item.path,
            link: item.path,
            level: item.level,
            active,
          }),
          renderChildren(h, {
            children: item.children || false,
            path: item.basePath,
            route: $route,
            maxDepth,
          }),
        ]

      const displayAllHeaders = $themeLocaleConfig.displayAllHeaders || $themeConfig.displayAllHeaders

      const link = renderLink(h, {
        icon:
          $themeConfig.sidebarIcon !== false && item.frontmatter.icon
            ? `${$themeConfig.iconPrefix === '' ? '' : $themeConfig.iconPrefix || 'icon-'}${item.frontmatter.icon}`
            : '',
        text: item.title || item.path,
        link: item.path,
        active,
      })

      if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
        const children = groupSidebarHeaders(item.headers)

        return [
          link,
          renderChildren(h, {
            children,
            path: item.path,
            route: $route,
            maxDepth,
          }),
        ]
      }

      return link
    },
  }
</script>

<style lang="stylus">
  $headings = 3 4 5 6

  .sidebar-links
    ul
      padding 0
      margin 0
      list-style-type none

      &.sidebar-sub-headers
        padding-left 1rem
        font-size 0.95em

        .has-anchor &
          @media (min-width $MQWide)
            display none

  a.sidebar-link
    display inline-block
    box-sizing border-box
    width 100%
    padding 0.35rem 1rem 0.35rem 1.25rem
    border-left 0.2rem solid transparent
    color var(--text-color)
    font-size 1em
    line-height 1.5
    font-weight 400

    for $heading in $headings
      &.heading{$heading}
        padding-left ($heading - 0.5) * 0.5rem !important

    .iconfont
      margin-right 0.25em

    &:hover
      background-color var(--bgcolor-light)

    &.active
      border-left-color var(--accent-color)
      background-color var(--accent-color-a15)
      color var(--accent-color)
      font-weight 500

      .iconfont
        color var(--accent-color)

    .sidebar-group &
      padding-left 1.75rem

    .sidebar-sub-headers &
      padding-top 0.25rem
      padding-bottom 0.25rem
      border-left none

      &.active
        background-color transparent
        font-weight 500
</style>
