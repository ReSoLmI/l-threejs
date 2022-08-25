import { route } from '../../constructor'
import { Index } from './ahs-index'

export const ApplicationTemplates = route('ApplicationTemplates', '应用部署模版', 'application-templates', {}, Index)
export const ApplicationTemplateCreate = route(
  'ApplicationTemplateCreate',
  '创建模版',
  'application-template-create',
  {},
  Index
)
export const ApplicationTemplateUpdate = route(
  'ApplicationTemplateUpdate',
  '创建模版',
  'application-template-update',
  {},
  Index
)
export const ApplicationTemplateDeploy = route(
  'ApplicationTemplateDeploy',
  '创建模版',
  'application-template-deploy',
  {},
  Index
)
