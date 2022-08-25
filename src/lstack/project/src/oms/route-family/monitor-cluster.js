import { routeFamily } from '../../constructor'

import { MonitorClusters } from '../route'

export const MonitorCluster = routeFamily(undefined, MonitorClusters)

MonitorClusters.setFamily(MonitorCluster)
