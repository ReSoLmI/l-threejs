import { routeFamily } from '../../constructor'
import {
  MonitorWorkload as MonitorWorkloadRoute,
  MonitorWorkloadCpuMem,
  MonitorWorkloadNetwork,
  MonitorWorkloadStorage,
} from '../route'

export const MonitorWorkload = routeFamily(undefined, MonitorWorkloadRoute)

MonitorWorkloadRoute.setFamily(MonitorWorkload)
MonitorWorkloadCpuMem.setFamily(MonitorWorkload)
MonitorWorkloadNetwork.setFamily(MonitorWorkload)
MonitorWorkloadStorage.setFamily(MonitorWorkload)
