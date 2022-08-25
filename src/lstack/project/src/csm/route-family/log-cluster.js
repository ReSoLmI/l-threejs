import { routeFamily } from '../../constructor'
import { LogClusters } from '../route'

export const LogCluster = routeFamily(undefined, LogClusters)

LogClusters.setFamily(LogCluster)
