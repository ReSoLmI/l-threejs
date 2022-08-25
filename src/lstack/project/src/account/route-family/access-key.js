import { routeFamily } from '../../constructor'

import { AccessKeyManage, AccessKeyCreate, AccessKeyUpdate } from '../route'

export const AccessKey = routeFamily(AccessKeyCreate, AccessKeyManage, undefined, AccessKeyUpdate)

AccessKeyCreate.setFamily(AccessKey)
AccessKeyManage.setFamily(AccessKey)
AccessKeyUpdate.setFamily(AccessKey)
