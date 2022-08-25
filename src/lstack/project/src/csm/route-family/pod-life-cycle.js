import { routeFamily } from '../../constructor'
import { EventLifeCycle as EventLifeCycleRoute, PodLifeCycle } from '../route'

export const EventLifeCycle = routeFamily(undefined, EventLifeCycleRoute)

PodLifeCycle.setFamily(EventLifeCycle)
EventLifeCycleRoute.setFamily(EventLifeCycle)
