import { routeFamily } from '../../constructor'
import { DashboardCards, DashboardCardCreate } from '../route'

export const DashboardCard = routeFamily(DashboardCardCreate, DashboardCards)

DashboardCards.setFamily(DashboardCard)
DashboardCardCreate.setFamily(DashboardCard)
