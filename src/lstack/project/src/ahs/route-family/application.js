import { routeFamily } from '../../constructor'
import {
  Application as ApplicationRoute,
  Applications,
  ApplicationCreate,
  ApplicationBaseInfo,
  ApplicationLog,
  ApplicationMonitor,
  ApplicationOrchestration,
  ApplicationProgram,
  ApplicationTopology,
} from '../route'

export const Application = routeFamily(ApplicationCreate, Applications, ApplicationRoute)

Applications.setFamily(Application)
ApplicationRoute.setFamily(Application)
ApplicationCreate.setFamily(Application)
ApplicationBaseInfo.setFamily(Application)
ApplicationLog.setFamily(Application)
ApplicationMonitor.setFamily(Application)
ApplicationOrchestration.setFamily(Application)
ApplicationProgram.setFamily(Application)
ApplicationTopology.setFamily(Application)
