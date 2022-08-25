import { routeFamily } from '../../constructor'

import { AccountInfo, AccountInfoCreate } from '../route'

export const AccountInfos = routeFamily(AccountInfoCreate, undefined, AccountInfo)

AccountInfoCreate.setFamily(AccountInfos)
AccountInfo.setFamily(AccountInfos)
