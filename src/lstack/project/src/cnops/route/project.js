import { route } from '../../constructor'
import { Index, ProjectIndex } from './cnops-index'

export const Projects = route('Projects', '项目列表', 'projects', {}, Index)
export const Project = route('Project', '项目详情', 'overview', {}, ProjectIndex)
export const ProjectCreateGuide = route('ProjectCreateGuide', '创建项目', 'project-create-guide', {}, Index)

Index.setRedirectRoute(Projects)
ProjectIndex.setRedirectRoute(Project)
