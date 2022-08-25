import { routeFamily } from '../../constructor'
import { EventOverview } from '../route'

export const CsmEventOverview = routeFamily(undefined, EventOverview)

EventOverview.setFamily(CsmEventOverview)
