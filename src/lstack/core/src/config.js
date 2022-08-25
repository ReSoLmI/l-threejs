import { ErrorCode } from '@lstack/network'
import Events from './events'
import Context from './context'

const requestCommonErrorHandler = error => {
  let consumed = false
  switch (error.code) {
    case ErrorCode.ERROR_NOT_LOGIN:
      Context.getEventBus().emit(Events.EVENT_NOT_LOGIN_ERROR, error)
      consumed = true
      break
    case ErrorCode.ERROR_BATCH_DELETE:
      Context.getEventBus().emit(Events.EVENT_BATCH_DELETE_ERROR, error)
      break
    case ErrorCode.ERROR_RESOURCE_OPERATE_PROTECT:
      Context.getEventBus().emit(Events.EVENT_RESOURCE_OPERATE_PROTECT_ERROR, error)
      break
    default:
      break
  }
  return consumed
}

export default {
  requestCommonErrorHandler,
}
