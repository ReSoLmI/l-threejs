import { routeFamily } from '../../constructor'
import { Routing as RoutingRoute, Routings, RoutingCreate } from '../route'

export const Routing = routeFamily(RoutingCreate, Routings, RoutingRoute)

Routings.setFamily(Routing)
RoutingRoute.setFamily(Routing)
RoutingCreate.setFamily(Routing)
