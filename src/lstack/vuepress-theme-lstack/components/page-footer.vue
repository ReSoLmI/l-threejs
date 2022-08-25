<template>
  <footer class="page-footer">
    <p>
      <span>
        {{ copyright }}
      </span>
      <a href="http://beian.miit.gov.cn/" rel="nofollow" target="_blank">
        {{ icpBeiAn }}
      </a>
    </p>
    <p>
      <img src="@theme/assets/beian.png" :alt="gongAnBeiAn" class="vertical" />
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002014307"
        rel="nofollow"
        target="_blank"
      >
        {{ gongAnBeiAn }}
      </a>
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'PageFooter',
    data() {
      return {
        copyright: `版权所有© 2017-${new Date().getUTCFullYear()} 杭州朗澈科技有限公司`,
        gongAnBeiAn: '浙公网安备 33011002015273号',
        icpBeiAn: '浙ICP备17047509号-3',
      }
    },
  }
</script>

<style lang="stylus" scoped>
  a
    color var(--dark-color, #666)

    &:hover
      color $accentColor
</style>
<style lang="stylus">
  .page-footer
    padding 12px 30px
    border-top 1px solid var(--border-color)
    background var(--bgcolor)
    color var(--dark-color, #666)
    text-align center

    @media (min-width $MQMobile)
      .has-sidebar &
        padding-left $sidebarWidth
        border-left 30px solid transparent

    & > div
      @media (max-width $MQMobileNarrow)
        width 100%

    p
      margin 0
      font-size 14px
      line-height 28px

      img
        height 21px
        padding-right 0.5em

      .vertical
        vertical-align middle

  .page:not(.not-found) + .footer-wrapper
    margin-top -2rem
</style>
