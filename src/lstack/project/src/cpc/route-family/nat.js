import { routeFamily } from '../../constructor'
import { Nat as NatRoute, NatCreate, Nats } from '../route'

export const Nat = routeFamily(NatCreate, Nats, NatRoute)

NatRoute.setFamily(Nat)
NatCreate.setFamily(Nat)
Nats.setFamily(Nat)
