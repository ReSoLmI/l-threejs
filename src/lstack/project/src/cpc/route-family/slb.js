import { routeFamily } from '../../constructor'
import { Slb as SlbRoute, SlbCreate, Slbs } from '../route'

export const Slb = routeFamily(SlbCreate, Slbs, SlbRoute)

Slbs.setFamily(Slb)
SlbRoute.setFamily(Slb)
SlbCreate.setFamily(Slb)
