import { routeFamily } from '../../constructor'
import { DashboardCards, DashboardCardCreate } from '../route'

export const DashboardCardFamily = routeFamily(DashboardCardCreate, DashboardCards)

DashboardCardCreate.setFamily(DashboardCardFamily)
DashboardCards.setFamily(DashboardCardFamily)
