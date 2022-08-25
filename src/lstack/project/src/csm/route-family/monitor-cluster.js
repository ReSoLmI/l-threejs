import { routeFamily } from '../../constructor'
import {
  MonitorCluster as MonitorClusterRoute,
  MonitorClusterCpuMem,
  MonitorClusterNetwork,
  MonitorClusterStorage,
} from '../route'

export const MonitorCluster = routeFamily(undefined, MonitorClusterRoute)

MonitorClusterRoute.setFamily(MonitorCluster)
MonitorClusterCpuMem.setFamily(MonitorCluster)
MonitorClusterNetwork.setFamily(MonitorCluster)
MonitorClusterStorage.setFamily(MonitorCluster)
