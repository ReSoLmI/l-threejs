import { routeFamily } from '../../constructor'
import { LogStreamCreate, LogStreams } from '../route'

export const LogStream = routeFamily(LogStreamCreate, LogStreams)

LogStreams.setFamily(LogStream)
LogStreamCreate.setFamily(LogStream)
