import { routeFamily } from '../../constructor'
import { StatefulSet as StatefulSetRoute, StatefulSetCreate, StatefulSets, StatefulSetUpdate } from '../route'

export const StatefulSet = routeFamily(StatefulSetCreate, StatefulSets, StatefulSetRoute, StatefulSetUpdate)

StatefulSetCreate.setFamily(StatefulSet)
StatefulSetUpdate.setFamily(StatefulSet)
StatefulSets.setFamily(StatefulSet)
StatefulSetRoute.setFamily(StatefulSet)
