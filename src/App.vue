<template>
  <div id="app">
    <router-view />
    <!--    <div class="nav_show" v-if="!navShow" @click="onButtonClick(true)">-->
    <!--      <span>显示</span>-->
    <!--    </div>-->
    <!--    <div class="link" v-if="navShow">-->
    <!--      <button @click="$router.push({ name: 'HelloWorld' })">1</button>-->
    <!--      <button @click="$router.push({ name: 'Learn1' })">2</button>-->
    <!--      <button @click="$router.push({ name: 'Learn2' })">3</button>-->
    <!--      <button @click="$router.push({ name: 'Benchi' })">4</button>-->
    <!--    </div>-->
    <!--    <div class="nav_hide" v-if="navShow" @click="onButtonClick(false)">-->
    <!--      <span>隐藏</span>-->
    <!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        navShow: false
      }
    },
    methods: {
      onButtonClick(b) {
        this.navShow = b
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    overflow: hidden;
    /* 隐藏body窗口区域滚动条 */
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;
  }
  .nav_show {
    position: absolute;
    left: 0;
    top: 40px;
  }
  .nav_hide {
    position: absolute;
    left: 0;
    top: 40px;
  }
  .link {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #d9a53d;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
