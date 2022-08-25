import { routeFamily } from '../../constructor'
import { SecurityGroup as SecurityGroupRoute, SecurityGroupCreate, SecurityGroups } from '../route'

export const SecurityGroup = routeFamily(SecurityGroupCreate, SecurityGroups, SecurityGroupRoute)

SecurityGroupCreate.setFamily(SecurityGroup)
SecurityGroups.setFamily(SecurityGroup)
SecurityGroupRoute.setFamily(SecurityGroup)
