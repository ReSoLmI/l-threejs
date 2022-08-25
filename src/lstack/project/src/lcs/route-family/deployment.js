import { routeFamily } from '../../constructor'
import { Deployment as DeploymentRoute, DeploymentCreate, Deployments, DeploymentUpdate } from '../route'

export const Deployment = routeFamily(DeploymentCreate, Deployments, DeploymentRoute, DeploymentUpdate)

DeploymentCreate.setFamily(Deployment)
DeploymentUpdate.setFamily(Deployment)
Deployments.setFamily(Deployment)
DeploymentRoute.setFamily(Deployment)
