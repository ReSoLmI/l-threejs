import { routeFamily } from '../../constructor'
import { MonitorNode as MonitorNodeRoute, MonitorNodeCpuMem, MonitorNodeNetwork, MonitorNodeStorage } from '../route'

export const MonitorNode = routeFamily(undefined, MonitorNodeRoute)

MonitorNodeRoute.setFamily(MonitorNode)
MonitorNodeCpuMem.setFamily(MonitorNode)
MonitorNodeNetwork.setFamily(MonitorNode)
MonitorNodeStorage.setFamily(MonitorNode)
