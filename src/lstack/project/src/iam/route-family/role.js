import { routeFamily } from '../../constructor'

import { Role as RoleRoute, Roles, RoleCreate } from '../route'

export const Role = routeFamily(RoleCreate, Roles, RoleRoute)

RoleRoute.setFamily(Role)
RoleCreate.setFamily(Role)
Roles.setFamily(Role)
