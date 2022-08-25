import { routeFamily } from '../../constructor'
import { CoreComponentEvents } from '../route'

export const CoreComponentEvent = routeFamily(undefined, CoreComponentEvents)

CoreComponentEvents.setFamily(CoreComponentEvent)
