import { routeFamily } from '../../constructor'

import { Organization as OrganizationRoute } from '../route'

export const Organization = routeFamily(undefined, undefined, OrganizationRoute)

OrganizationRoute.setFamily(Organization)
