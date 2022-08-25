<template>
  <div ref="luiTimeLine" v-loading="loading" class="lui-time-line">
    <div ref="viewBox" class="view-box">
      <div class="item-box">
        <div
          v-for="(item, index) in calcList"
          :id="'item-' + item[itemKey]"
          ref="item"
          :key="item[itemKey]"
          :tabindex="index + 100"
          class="item"
        >
          <div class="top" :class="{ 'top-even': index % 2 !== 0 }">
            <div class="card">
              <slot name="card" :item="item" :index="index" />
            </div>
            <div class="link-line"></div>
          </div>
          <div class="middle">
            <div class="dot"></div>
          </div>
          <div class="bottom" :class="{ 'bottom-even': index % 2 !== 0 }">
            <div class="label">
              <slot name="label" :item="item" :index="index" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { isArray, isEmptyArray } from '@lstack/utils'
  /**
   * === 注意 ===
   * 整体高度有默认最小值，可设置，高度会根据内容自适应
   * 每一项宽度有默认最小值，可设置，每一项宽度会自动计算当前 card 插槽的宽度宽度
   *
   * === props ===
   * list: 渲染数据
   * itemKey: 必填，唯一 key 字段
   * desc: 传值则数组倒序
   * loading: 转圈圈
   * itemMinWidth: 每一项的最小宽度，默认 100px
   * minHeight: 整体最小高度，默认 400px
   *
   * === slot ===
   * card: 每一项的卡片，抛出 item
   * label: 紧挨着点点的那个，也抛出 item
   *
   * === method ===
   * jumpTo: 跳转至指定项，入参为 itemKey 的值
   */
  export default {
    name: 'LuiTimeLine',
    props: {
      list: {
        type: Array,
        default: () => [],
      },
      itemKey: {
        type: String || Number,
        default: 'id',
      },
      desc: Boolean,
      loading: Boolean,
      itemMinWidth: {
        type: String,
        default: '100px',
      },
      minHeight: {
        type: String,
        default: '400px',
      },
    },
    computed: {
      calcList() {
        if (this.desc) {
          return this.list.concat([]).reverse()
        }
        return this.list.concat([])
      },
    },
    watch: {
      list: {
        deep: true,
        immediate: true,
        handler(val) {
          this.$nextTick(() => {
            if (val && val.length !== 0) {
              this.setItemWidth()
              this.setItemHeight()
              this.initItemMinWidth()
            }
            this.scrollToRight()
          })
        },
      },
    },
    mounted() {
      this.initMinHeight()
    },
    methods: {
      scrollToRight() {
        this.$refs.viewBox.style.scrollBehavior = 'auto'
        this.$refs.viewBox.scrollTo({ left: this.$refs.viewBox.scrollWidth })
        this.$refs.viewBox.style.scrollBehavior = 'smooth'
      },
      setItemWidth() {
        this.$refs.item.forEach(item => {
          item.style.width = `${item.querySelector('.card').clientWidth}px`
        })
      },
      findMax(arr) {
        if (!isArray(arr) || isEmptyArray(arr)) {
          return undefined
        }
        let max = arr[0]
        arr.forEach(item => {
          if (item > max) {
            max = item
          }
        })
        return max
      },
      setItemHeight() {
        const itemHeight = []
        this.$refs.item.forEach(item => {
          const height = item.querySelector('.top').clientHeight
          item.style.height = `${height}px`
          itemHeight.push(height)
        })
        this.$refs.luiTimeLine.style.height = `${this.findMax(itemHeight) * 2 + 100}px`
      },
      initItemMinWidth() {
        this.$refs.item.forEach(item => {
          item.style.minWidth = this.itemMinWidth
        })
      },
      initMinHeight() {
        this.$refs.luiTimeLine.style.minHeight = this.minHeight
      },
      jumpTo(key) {
        this.$refs.luiTimeLine.querySelector(`#item-${key}`).focus()
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@lstack/style-scss/src/token/index.scss';
  $lui-time-line-background-color: #f9f9f9;

  .lui-time-line {
    position: relative;
    width: 100%;
    height: 400px;
    background-color: $lui-time-line-background-color;
    &::after {
      position: absolute;
      top: calc(50% - 8px);
      min-width: 100%;
      height: 2px;
      background-color: $color-brand1-normal;
      transform: translateY(-50%);
      content: '';
    }
    .view-box {
      position: relative;
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      scroll-behavior: smooth;
      .item-box {
        position: absolute;
        top: 50%;
        display: flex;
        flex-direction: row-reverse;
        min-width: 100%;
        transform: translateY(-50%);
        .item {
          position: relative;
          flex-shrink: 0;
          box-sizing: content-box;
          margin: 0 20px;
          .top {
            position: absolute;
            bottom: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            .card {
              width: 100%;
              padding: 10px;
              background-color: $color-fill1-dark;
              border: 1px solid $color-brand1-normal;
            }
            .link-line {
              width: 1px;
              height: 50px;
              background-color: $color-brand1-normal;
            }
          }
          .top-even {
            top: 50%;
            bottom: auto;
            flex-direction: column-reverse;
          }
          .middle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .dot {
              width: 10px;
              height: 10px;
              background-color: $color-brand1-normal;
              border-radius: 50%;
            }
          }
          .bottom {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            .label {
              padding: 10px;
              text-align: center;
            }
          }
          .bottom-even {
            top: auto;
            bottom: 50%;
          }
        }
      }
    }
  }
</style>
