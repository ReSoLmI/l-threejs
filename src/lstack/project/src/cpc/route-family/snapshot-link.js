import { routeFamily } from '../../constructor'
import { SnapshotLink as SnapshotLinkRoute, SnapshotLinks } from '../route'

export const SnapshotLink = routeFamily(undefined, SnapshotLinks, SnapshotLinkRoute)

SnapshotLinks.setFamily(SnapshotLink)
SnapshotLinkRoute.setFamily(SnapshotLink)
