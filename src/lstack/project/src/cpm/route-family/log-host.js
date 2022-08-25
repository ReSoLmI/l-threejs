import { routeFamily } from '../../constructor'
import { LogHosts } from '../route'

export const LogHostFamily = routeFamily(undefined, LogHosts)

LogHosts.setFamily(LogHostFamily)
