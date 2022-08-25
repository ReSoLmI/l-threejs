import { routeFamily } from '../../constructor'

import { MonitorNodes } from '../route'

export const MonitorNode = routeFamily(undefined, MonitorNodes)

MonitorNodes.setFamily(MonitorNode)
