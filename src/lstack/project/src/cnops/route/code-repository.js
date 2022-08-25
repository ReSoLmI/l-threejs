// 此处为进入项目后的页面，不是传统的详情页面
import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const CodeRepositories = route(
  'CodeRepositories',
  '代码源配置',
  'code-repositories',
  { projectId: undefined },
  ProjectIndex
)
export const CodeRepositoryCreate = route(
  'CodeRepositoryCreate',
  '创建代码源',
  'code-repository-create',
  { projectId: undefined },
  ProjectIndex
)
export const CodeRepositoryGrantCallbackPage = route('CodeRepositoryGrantCallbackPage', '', '/grant-callback', {
  type: undefined,
})
