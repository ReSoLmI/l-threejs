<template>
  <div class="confirm-input">
    <lui-text margin-bottom>
      <span>{{ keywordPrefix }}</span>
      <lui-text inline type="error">“ {{ keyword }} ”</lui-text>
      <span>{{ keywordSuffix }}</span>
    </lui-text>
    <lui-input v-model="input" :placeholder="`${keywordPrefix} “ ${keyword} ”${keywordSuffix}`" />
  </div>
</template>

<script>
  import LuiInput from '../../lui/lui-input'
  import LuiText from '../../lui/lui-text'

  export default {
    name: 'ConfirmInput',
    components: { LuiText, LuiInput },
    props: {
      keyword: { type: String, default: 'DELETE' },
      keywordPrefix: { type: String, default: '输入' },
      keywordSuffix: { type: String, default: '确认删除' },
    },
    data() {
      return { input: undefined }
    },
    computed: {
      confirmed() {
        return this.input === this.keyword
      },
    },
    watch: {
      confirmed: {
        immediate: true,
        handler(val) {
          this.$emit('change', val)
        },
      },
    },
  }
</script>
