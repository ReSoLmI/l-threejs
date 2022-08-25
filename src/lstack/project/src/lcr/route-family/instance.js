import { routeFamily } from '../../constructor'
import { Instances, InstanceCreate } from '../route'

export const InstanceFamily = routeFamily(InstanceCreate, Instances)

Instances.setFamily(InstanceFamily)
InstanceCreate.setFamily(InstanceFamily)
