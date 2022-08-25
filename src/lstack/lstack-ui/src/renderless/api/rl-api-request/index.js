import RlApiRequest from './rl-api-request'

RlApiRequest.install = (Vue, opts = {}) => {
  Vue.component(RlApiRequest.name, RlApiRequest)
  Vue.prototype.$LUI = {
    requestCommonErrorHandler: opts.requestCommonErrorHandler,
  }
}

export default RlApiRequest
