import { routeFamily } from '../../constructor'
import { DaemonSet as DaemonSetRoute, DaemonSetCreate, DaemonSets, DaemonSetUpdate } from '../route'

export const DaemonSet = routeFamily(DaemonSetCreate, DaemonSets, DaemonSetRoute, DaemonSetUpdate)

DaemonSetCreate.setFamily(DaemonSet)
DaemonSetUpdate.setFamily(DaemonSet)
DaemonSets.setFamily(DaemonSet)
DaemonSetRoute.setFamily(DaemonSet)
