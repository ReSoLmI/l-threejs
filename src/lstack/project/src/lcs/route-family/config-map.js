import { routeFamily } from '../../constructor'
import { ConfigMap as ConfigMapRoute, ConfigMapCreate, ConfigMapUpdate, ConfigMaps } from '../route'

export const ConfigMap = routeFamily(ConfigMapCreate, ConfigMaps, ConfigMapRoute, ConfigMapUpdate)

ConfigMapCreate.setFamily(ConfigMap)
ConfigMapUpdate.setFamily(ConfigMap)
ConfigMaps.setFamily(ConfigMap)
ConfigMapRoute.setFamily(ConfigMap)
