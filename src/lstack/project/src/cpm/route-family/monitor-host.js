import { routeFamily } from '../../constructor'
import { MonitorHosts } from '../route'

export const MonitorHostFamily = routeFamily(undefined, MonitorHosts)

MonitorHosts.setFamily(MonitorHostFamily)
