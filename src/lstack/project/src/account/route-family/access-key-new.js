import { routeFamily } from '../../constructor'

import { AccessKeys, AccessKeyCreate } from '../route'

export const AccessKey = routeFamily(AccessKeyCreate, AccessKeys, undefined, undefined)

AccessKeyCreate.setFamily(AccessKey)
AccessKeys.setFamily(AccessKey)
