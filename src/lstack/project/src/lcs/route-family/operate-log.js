import { routeFamily } from '../../constructor'
import { OperateLog as OperateLogRoute, OperateLogs } from '../route'

export const OperateLog = routeFamily(undefined, OperateLogs, OperateLogRoute)

OperateLogs.setFamily(OperateLog)
OperateLogRoute.setFamily(OperateLog)
