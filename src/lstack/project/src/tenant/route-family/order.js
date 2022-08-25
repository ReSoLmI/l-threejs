import { routeFamily } from '../../constructor'

import { Orders } from '../route'

export const Order = routeFamily(undefined, Orders)

Orders.setFamily(Order)
