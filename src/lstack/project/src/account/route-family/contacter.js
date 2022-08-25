import { routeFamily } from '../../constructor'

import { ContacterCreate, Contacters } from '../route'

export const Contactor = routeFamily(ContacterCreate, Contacters)

ContacterCreate.setFamily(Contactor)
Contacters.setFamily(Contactor)
