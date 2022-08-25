import { routeFamily } from '../../constructor'
import { Events } from '../route'

export const Event = routeFamily(undefined, Events)

Events.setFamily(Event)
