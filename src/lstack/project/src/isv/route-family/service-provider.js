import { routeFamily } from '../../constructor'

import {
  ServiceProvider as ServiceProviderRoute,
  PostUpdate,
  InvoiceUpdate,
  BusinessConfigUpdate,
  ServiceProviderConfigUpdate,
} from '../route'

export const ServiceProvider = routeFamily(undefined, undefined, ServiceProviderRoute, ServiceProviderConfigUpdate)

ServiceProviderRoute.setFamily(ServiceProvider)
PostUpdate.setFamily(ServiceProvider)
InvoiceUpdate.setFamily(ServiceProvider)
BusinessConfigUpdate.setFamily(ServiceProvider)
ServiceProviderConfigUpdate.setFamily(ServiceProvider)
