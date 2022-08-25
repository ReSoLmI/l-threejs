import { route } from '../../constructor'
import { Index, ProjectIndex } from './cnops-index'

export const ProjectOperationLogs = route(
  'ProjectOperationLogs',
  '操作记录',
  'project-operation-logs',
  { type: undefined },
  Index
)
export const EnvironmentOperationLogs = route(
  'EnvironmentOperationLogs',
  '操作记录',
  'environment-operation-logs',
  { type: undefined },
  ProjectIndex
)
