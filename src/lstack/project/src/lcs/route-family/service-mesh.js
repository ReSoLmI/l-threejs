import { routeFamily } from '../../constructor'
import { ServiceMeshes } from '../route'

export const ServiceMesh = routeFamily(undefined, ServiceMeshes)

ServiceMeshes.setFamily(ServiceMesh)
