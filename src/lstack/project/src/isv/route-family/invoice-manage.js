import { routeFamily } from '../../constructor'

import { Invoice as InvoiceManageRoute } from '../route'

export const InvoiceManage = routeFamily(undefined, InvoiceManageRoute)

InvoiceManageRoute.setFamily(InvoiceManage)
