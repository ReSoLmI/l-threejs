import { routeFamily } from '../../constructor'
import { LogGroups, LogGroupCreate } from '../route'

export const LogGroupFamily = routeFamily(LogGroupCreate, LogGroups)

LogGroupCreate.setFamily(LogGroupFamily)
LogGroups.setFamily(LogGroupFamily)
