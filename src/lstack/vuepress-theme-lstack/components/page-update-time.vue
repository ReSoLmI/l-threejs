<template>
  <div class="page-update-time">
    <span class="label">{{ updateTimeText }}:</span>
    <span class="time">{{ updateTime }}</span>
  </div>
</template>

<script>
  import formatDate from '@lstack/utils/src/format-date'

  export default {
    name: 'PageUpdateTime',

    computed: {
      i18n() {
        return { ...this.$themeLocaleConfig.meta, ...{ updateTime: '最近更新时间' } }
      },

      updateTime() {
        return this.$page.frontmatter.contributor === false ||
          (this.$themeConfig.updateTimeStamp === false && !this.$page.frontmatter.updateTimeStamp)
          ? ''
          : formatDate(new Date(this.$page.updateTimeStamp)) || ''
      },

      updateTimeText() {
        return this.i18n.updateTime
      },
    },
  }
</script>

<style lang="stylus">
  @require '~@mr-hope/vuepress-shared/styles/wrapper'

  .page-update-time
    .label
      font-weight 500
      color var(--text-color-l25)

    .time
      font-weight 400
      color var(--dark-grey)

  .page-update-time
    text-align left
    font-size 14px

    @media (max-width $MQMobile)
      font-size 13px
</style>
