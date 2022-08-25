import { routeFamily } from '../../constructor'

import { Contract as ContractManageRoute } from '../route'

export const ContractManage = routeFamily(undefined, ContractManageRoute)

ContractManageRoute.setFamily(ContractManage)
