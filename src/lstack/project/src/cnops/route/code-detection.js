import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const CodeDetections = route(
  'CodeDetections',
  '代码静态检测',
  'code-detections',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)

export const CodeDetectionCreate = route(
  'CodeDetectionCreate',
  '新建代码检测',
  'code-detection-create',
  {
    projectId: undefined,
    projectName: undefined,
  },
  ProjectIndex
)
