import { routeFamily } from '../../constructor'

import { ProduceApis } from '../route'

export const ProduceApi = routeFamily(undefined, ProduceApis)

ProduceApis.setFamily(ProduceApi)
