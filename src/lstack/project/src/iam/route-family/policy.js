import { routeFamily } from '../../constructor'

import { Policy as PolicyRoute, Policies, PolicyCreate } from '../route'

export const Policy = routeFamily(PolicyCreate, Policies, PolicyRoute)

PolicyCreate.setFamily(Policy)
Policies.setFamily(Policy)
PolicyRoute.setFamily(Policy)
