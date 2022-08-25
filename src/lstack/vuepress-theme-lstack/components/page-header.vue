<template>
  <div class="page-header">
    <my-transition>
      <bread-crumb class="page-header_bread-crumb" :key="$route.path" />
    </my-transition>
    <my-transition :delay="0.08">
      <h1 v-if="$page.title" class="page-header__title">{{ $page.title }}</h1>
    </my-transition>
    <my-transition :delay="0.12">
      <page-update-time :key="$route.path" />
    </my-transition>
  </div>
</template>

<script>
  import MyTransition from '@theme/components/my-transition.vue'
  import PageUpdateTime from '@theme/components/page-update-time'
  import BreadCrumb from '@theme/components/bread-crumb.vue'

  export default {
    name: 'PageHeader',
    components: {
      MyTransition,
      PageUpdateTime,
      BreadCrumb,
    },
  }
</script>
<style lang="stylus">
  @require '~@mr-hope/vuepress-shared/styles/wrapper'

  .page-header
    @extend $wrapper

    .page-header_bread-crumb
      margin-bottom 8px

    .page-header__title
      margin-block-start: 0;
      margin-block-end: 0;
      margin-bottom 8px;
</style>
