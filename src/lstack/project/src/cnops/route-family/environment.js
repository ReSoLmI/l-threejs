import { routeFamily } from '../../constructor'
import { Environments, Environment, EnvironmentCreate, EnvironmentUpdate } from '../route'

export const EnvironmentFamily = routeFamily(EnvironmentCreate, Environments, Environment, EnvironmentUpdate)

Environments.setFamily(EnvironmentFamily)
EnvironmentCreate.setFamily(EnvironmentFamily)
Environment.setFamily(EnvironmentFamily)
EnvironmentUpdate.setFamily(EnvironmentFamily)
