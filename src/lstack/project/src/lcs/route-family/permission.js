import { routeFamily } from '../../constructor'
import { PermissionCreate, Permissions } from '../route'

export const Permission = routeFamily(PermissionCreate, Permissions)

PermissionCreate.setFamily(Permission)
Permissions.setFamily(Permission)
