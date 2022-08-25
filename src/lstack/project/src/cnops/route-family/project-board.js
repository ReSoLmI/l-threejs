import { routeFamily } from '../../constructor'
import { ProjectBoard } from '../route'

export const ProjectBoardFamily = routeFamily(undefined, undefined, ProjectBoard, undefined)

ProjectBoard.setFamily(ProjectBoardFamily)
