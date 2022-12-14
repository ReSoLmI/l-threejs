import { routeFamily } from '../../constructor'

import { SubUser as SubUserRoute, SubUserCreate, SubUsers } from '../route'

export const SubUser = routeFamily(SubUserCreate, SubUsers, SubUserRoute)

SubUserCreate.setFamily(SubUser)
SubUsers.setFamily(SubUser)
SubUserRoute.setFamily(SubUser)
