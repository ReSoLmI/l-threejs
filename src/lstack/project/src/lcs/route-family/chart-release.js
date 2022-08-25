import { routeFamily } from '../../constructor'
import { ChartRelease as ChartReleaseRoute, ChartReleases } from '../route'

export const ChartRelease = routeFamily(undefined, ChartReleases, ChartReleaseRoute)

ChartReleases.setFamily(ChartRelease)
ChartReleaseRoute.setFamily(ChartRelease)
