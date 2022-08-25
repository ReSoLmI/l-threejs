import { routeFamily } from '../../constructor'
import { EdgeNode as EdgeNodeRoute, EdgeNodeCreate, EdgeNodeUpdate, EdgeNodes } from '../route'

export const EdgeNode = routeFamily(EdgeNodeCreate, EdgeNodes, EdgeNodeRoute, EdgeNodeUpdate)

EdgeNodeCreate.setFamily(EdgeNode)
EdgeNodeUpdate.setFamily(EdgeNode)
EdgeNodes.setFamily(EdgeNode)
EdgeNodeRoute.setFamily(EdgeNode)
