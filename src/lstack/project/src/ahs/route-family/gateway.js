import { routeFamily } from '../../constructor'
import { Gateway as GatewayRoute, Gateways, GatewayCreate } from '../route'

export const Gateway = routeFamily(GatewayCreate, Gateways, GatewayRoute)

Gateways.setFamily(Gateway)
GatewayRoute.setFamily(Gateway)
GatewayCreate.setFamily(Gateway)
