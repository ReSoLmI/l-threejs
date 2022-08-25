<template>
  <div class="content">
    <img :src="NotFound" alt="404" />
    <p>{{ getMsg() }}</p>
    <div class="notFound-button">
      <button @click="back">返回上一页</button>
      <button @click="index">返回主页</button>
    </div>
  </div>
</template>
<script>
import NotFound from '../assets/404.png'

const msgs = [`这里什么都没有。`, `我是谁？我在哪？`, `Sorry, 您访问的页面找不到了 !`]

export default {
  data() {
    return {
      NotFound,
    }
  },
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    index() {
      this.$router.push('/')
    },
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>
<style lang="stylus" scoped>
  .content {
    display flex
    flex-direction column
    justify-content center
    align-items center
    min-height 100vh

    img {
      width 50%
      max-width 32.5rem
    }

    p {
      font-weight 700
      font-size 1.5rem
      line-height 5rem
      text-align center
    }

    .notFound-button {
      button {
        display inline-block
        width 6.25rem
        font-weight 500
        font-size 0.75rem
        line-height 1.875rem
        border 0
        border-radiu 0.125rem 0 0 0.125rem
        cursor pointer
        outline none
        color #ffffff
        background-color #5e7ce0
        border-color #5e7ce0
      }

      button:nth-child(2) {
        margin-left 0.75rem
      }
    }
  }
</style>
