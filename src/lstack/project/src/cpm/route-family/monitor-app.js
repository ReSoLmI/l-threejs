import { routeFamily } from '../../constructor'
import { MonitorApps } from '../route'

export const MonitorAppFamily = routeFamily(undefined, MonitorApps)

MonitorApps.setFamily(MonitorAppFamily)
