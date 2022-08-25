import { routeFamily } from '../../constructor'
import { LogGroupCreate, LogGroups } from '../route'

export const LogGroup = routeFamily(LogGroupCreate, LogGroups)

LogGroups.setFamily(LogGroup)
LogGroupCreate.setFamily(LogGroup)
