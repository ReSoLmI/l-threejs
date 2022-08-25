import { routeFamily } from '../../constructor'
import { Projects, ProjectCreateGuide, Project } from '../route'

export const ProjectFamily = routeFamily(ProjectCreateGuide, Projects)

Projects.setFamily(ProjectFamily)
ProjectCreateGuide.setFamily(ProjectFamily)
Project.setFamily(routeFamily(undefined, Project))
