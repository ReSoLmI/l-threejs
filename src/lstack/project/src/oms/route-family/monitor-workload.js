import { routeFamily } from '../../constructor'

import { MonitorWorkloads } from '../route'

export const MonitorWorkload = routeFamily(undefined, MonitorWorkloads)

MonitorWorkloads.setFamily(MonitorWorkload)
