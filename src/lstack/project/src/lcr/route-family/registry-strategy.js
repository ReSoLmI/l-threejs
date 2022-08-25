import { routeFamily } from '../../constructor'
import { RegistryStrategies, RegistryStrategyCreate, RegistryStrategyUpdate } from '../route'

export const RegistryStrategyFamily = routeFamily(
  RegistryStrategyCreate,
  RegistryStrategies,
  undefined,
  RegistryStrategyUpdate
)

RegistryStrategyCreate.setFamily(RegistryStrategyFamily)
RegistryStrategies.setFamily(RegistryStrategyFamily)
RegistryStrategyUpdate.setFamily(RegistryStrategyFamily)
