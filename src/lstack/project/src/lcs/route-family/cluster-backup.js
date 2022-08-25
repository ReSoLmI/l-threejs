import { routeFamily } from '../../constructor'
import {
  ClusterBackup as ClusterBackupRoute,
  ClusterBackupCreate,
  ClusterBackupLocation as ClusterBackupLocationRoute,
  ClusterBackupLocationCreate,
} from '../route'

export const ClusterBackup = routeFamily(ClusterBackupCreate, ClusterBackupRoute)
export const ClusterBackupLocation = routeFamily(ClusterBackupLocationCreate, ClusterBackupLocationRoute)

ClusterBackupCreate.setFamily(ClusterBackup)
ClusterBackupRoute.setFamily(ClusterBackup)
ClusterBackupLocationCreate.setFamily(ClusterBackupLocation)
ClusterBackupLocationRoute.setFamily(ClusterBackupLocation)
