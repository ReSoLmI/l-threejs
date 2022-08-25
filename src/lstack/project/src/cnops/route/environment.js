// 此处为进入项目后的页面，不是传统的详情页面
import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const Environments = route(
  'Environments',
  '环境列表',
  'environments',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
export const Environment = route(
  'Environment',
  '环境详情',
  'environment',
  { projectId: undefined, projectName: undefined, environmentId: undefined },
  ProjectIndex
)
export const EnvironmentCreate = route(
  'EnvironmentCreate',
  '创建环境',
  'environment-create',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
export const EnvironmentUpdate = route(
  'EnvironmentUpdate',
  '修改环境',
  'environment-update',
  { projectId: undefined, projectName: undefined, environmentId: undefined },
  ProjectIndex
)
