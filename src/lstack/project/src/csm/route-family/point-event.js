import { routeFamily } from '../../constructor'
import { PointEvents } from '../route'

export const PointEvent = routeFamily(undefined, PointEvents)

PointEvents.setFamily(PointEvent)
