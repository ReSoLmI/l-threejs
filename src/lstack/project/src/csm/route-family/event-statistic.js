import { routeFamily } from '../../constructor'
import { EventStatistic } from '../route'

export const Statistic = routeFamily(undefined, EventStatistic)

EventStatistic.setFamily(Statistic)
