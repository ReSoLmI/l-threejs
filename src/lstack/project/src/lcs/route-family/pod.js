import { routeFamily } from '../../constructor'
import { Pod as PodRoute, Pods } from '../route'

export const Pod = routeFamily(undefined, Pods, PodRoute)

Pods.setFamily(Pod)
PodRoute.setFamily(Pod)
