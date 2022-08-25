// 此处为进入项目后的页面，不是传统的详情页面
import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const Pipelines = route(
  'Pipelines',
  '流水线',
  'pipelines',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
export const Pipeline = route(
  'Pipeline',
  '流水线详情',
  'pipeline',
  { projectId: undefined, projectName: undefined, pipelineId: undefined, pipelineGroupId: undefined },
  ProjectIndex
)
export const PipelineCreate = route(
  'PipelineCreate',
  '创建流水线',
  'pipeline-create',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
export const PipelineUpdate = route(
  'PipelineUpdate',
  '修改流水线',
  'pipeline-update',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
