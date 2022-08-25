import { routeFamily } from '../../constructor'
import { Tapds } from '../route'

export const TapdFamily = routeFamily(undefined, Tapds, undefined, undefined)

Tapds.setFamily(TapdFamily)
