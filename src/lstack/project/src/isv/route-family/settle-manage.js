import { routeFamily } from '../../constructor'

import { SettleManage as SettleManageRoute } from '../route'

export const SettleManage = routeFamily(undefined, SettleManageRoute)

SettleManageRoute.setFamily(SettleManage)
