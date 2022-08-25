<template>
  <lui-icon v-clipboard="value" v-clipboard:success="clipboardSuccessHandler" v-bind="$attrs" icon="copy" />
</template>

<script>
  import VClipboard from '../../directive/v-clipboard'
  import LuiIcon from '../../lui/lui-icon'

  export default {
    name: 'ClipboardIcon',
    components: { LuiIcon },
    directives: { clipboard: VClipboard },
    props: { value: { required: true } },
    methods: {
      clipboardSuccessHandler({ value, event }) {
        this.$message({
          message: '复制成功',
          type: 'success',
          duration: 1000,
        })
      },
    },
  }
</script>
