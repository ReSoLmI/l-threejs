import { routeFamily } from '../../constructor'
import { PersistentVolume as PersistentVolumeRoute, PersistentVolumeCreate, PersistentVolumes } from '../route'

export const PersistentVolume = routeFamily(PersistentVolumeCreate, PersistentVolumes, PersistentVolumeRoute)

PersistentVolumeCreate.setFamily(PersistentVolume)
PersistentVolumes.setFamily(PersistentVolume)
PersistentVolumeRoute.setFamily(PersistentVolume)
