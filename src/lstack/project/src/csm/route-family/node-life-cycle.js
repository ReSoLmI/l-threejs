import { routeFamily } from '../../constructor'
import { EventLifeCycle, NodeLifeCycle } from '../route'

export const NodeEventLifeCycle = routeFamily(undefined, EventLifeCycle)

NodeLifeCycle.setFamily(NodeEventLifeCycle)
