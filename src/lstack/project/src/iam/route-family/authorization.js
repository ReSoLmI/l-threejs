import { routeFamily } from '../../constructor'

import { Authorizations, AuthorizationCreate } from '../route'

export const Authorization = routeFamily(AuthorizationCreate, Authorizations)

AuthorizationCreate.setFamily(Authorization)
Authorizations.setFamily(Authorization)
