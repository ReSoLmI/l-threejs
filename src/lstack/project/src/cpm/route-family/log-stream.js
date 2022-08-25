import { routeFamily } from '../../constructor'
import { LogStreams, LogStreamCreate, LogStreamUpdate } from '../route'

export const LogStreamFamily = routeFamily(LogStreamCreate, LogStreams, undefined, LogStreamUpdate)

LogStreamCreate.setFamily(LogStreamFamily)
LogStreams.setFamily(LogStreamFamily)
LogStreamUpdate.setFamily(LogStreamFamily)
