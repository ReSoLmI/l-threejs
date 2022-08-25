import { route } from '../../constructor'

export const Index = route('Index', 'Index', '/', {})
export const ProjectIndex = route('ProjectIndex', 'ProjectIndex', '/project/', {
  projectId: undefined,
  projectName: undefined,
})
