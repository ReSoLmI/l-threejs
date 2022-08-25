// 此处为进入项目后的页面，不是传统的详情页面
import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const PipelineStartupLog = route(
  'PipelineStartupLog',
  '流水线任务',
  'pipeline-startup-log',
  {
    projectId: undefined,
    projectName: undefined,
    pipelineId: undefined,
    pipelineGroupId: undefined,
    pipelineStartupId: undefined,
    status: undefined,
  },
  ProjectIndex
)
