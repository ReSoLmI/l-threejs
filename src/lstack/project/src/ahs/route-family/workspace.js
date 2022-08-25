import { routeFamily } from '../../constructor'
import { Workspace as WorkspaceRoute, Workspaces, WorkspaceCreate } from '../route'

export const Workspace = routeFamily(WorkspaceCreate, Workspaces, WorkspaceRoute)

Workspaces.setFamily(Workspace)
WorkspaceRoute.setFamily(Workspace)
WorkspaceCreate.setFamily(Workspace)
