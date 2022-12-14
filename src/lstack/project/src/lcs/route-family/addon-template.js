import { routeFamily } from '../../constructor'
import { AddonTemplate as AddonTemplateRoute, AddonTemplates } from '../route'

export const AddonTemplate = routeFamily(undefined, AddonTemplates, AddonTemplateRoute)

AddonTemplates.setFamily(AddonTemplate)
AddonTemplateRoute.setFamily(AddonTemplate)
