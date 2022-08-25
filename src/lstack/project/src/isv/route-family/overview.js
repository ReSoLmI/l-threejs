import { routeFamily } from '../../constructor'

import { Overview as OverviewRoute } from '../route'

export const Overview = routeFamily(undefined, undefined, OverviewRoute)

OverviewRoute.setFamily(Overview)
