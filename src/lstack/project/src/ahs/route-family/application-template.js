import { routeFamily } from '../../constructor'
import {
  ApplicationTemplates as ApplicationTemplatesRoute,
  ApplicationTemplateCreate,
  ApplicationTemplateUpdate,
  ApplicationTemplateDeploy,
} from '../route'

export const ApplicationTemplate = routeFamily(
  ApplicationTemplateCreate,
  ApplicationTemplatesRoute,
  ApplicationTemplateUpdate,
  ApplicationTemplateDeploy
)

ApplicationTemplatesRoute.setFamily(ApplicationTemplate)
ApplicationTemplateCreate.setFamily(ApplicationTemplate)
ApplicationTemplateUpdate.setFamily(ApplicationTemplate)
ApplicationTemplateDeploy.setFamily(ApplicationTemplate)
