import { routeFamily } from '../../constructor'

import {
  AccessKeyGroup as AccessKeyGroupRoute,
  AccessKeyGroups,
  AccessKeyGroupCreate,
  AccessKeyGroupUpdate,
} from '../route'

export const AccessKeyGroup = routeFamily(
  AccessKeyGroupCreate,
  AccessKeyGroups,
  AccessKeyGroupRoute,
  AccessKeyGroupUpdate
)

AccessKeyGroupCreate.setFamily(AccessKeyGroup)
AccessKeyGroups.setFamily(AccessKeyGroup)
AccessKeyGroupRoute.setFamily(AccessKeyGroup)
AccessKeyGroupUpdate.setFamily(AccessKeyGroup)
