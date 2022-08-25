import { routeFamily } from '../../constructor'
import {
  ApplicationTemplate as ApplicationTemplateRoute,
  ApplicationTemplateCreate,
  ApplicationTemplates,
} from '../route'

export const ApplicationTemplate = routeFamily(
  ApplicationTemplateCreate,
  ApplicationTemplates,
  ApplicationTemplateRoute
)

ApplicationTemplateCreate.setFamily(ApplicationTemplate)
ApplicationTemplates.setFamily(ApplicationTemplate)
ApplicationTemplateRoute.setFamily(ApplicationTemplate)
