import { routeFamily } from '../../constructor'

import { OrderManage as OrderManageRoute } from '../route'

export const OrderManage = routeFamily(undefined, OrderManageRoute)

OrderManageRoute.setFamily(OrderManage)
