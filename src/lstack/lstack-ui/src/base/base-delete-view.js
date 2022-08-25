import { isFunction, isNotEmptyText } from '@lstack/utils'
import BaseView from './base-view'

export default {
  name: 'BaseDeleteView',
  extends: BaseView,
  props: {
    list: Array,
  },
  data() {
    return {
      confirmed: false,
    }
  },
  methods: {
    toastSuccessAndClose(close, message = '删除成功') {
      if (isNotEmptyText(message)) {
        this.$message.success(message)
      }
      this.$emit('deleted')
      if (isFunction(close)) {
        close()
      } else {
        this.$emit('close')
      }
    },
    changeConfirmed(confirmed) {
      this.confirmed = confirmed
    },
  },
}
