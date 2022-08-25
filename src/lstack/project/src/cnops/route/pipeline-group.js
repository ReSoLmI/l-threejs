// 此处为进入项目后的页面，不是传统的详情页面
import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const PipelineGroups = route(
  'PipelineGroups',
  '流水线组',
  'pipeline-groups',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
