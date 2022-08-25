import { routeFamily } from '../../constructor'
import { DataBrowser as DataBrowserRoute } from '../route'

export const DataBrowser = routeFamily(undefined, DataBrowserRoute)

DataBrowserRoute.setFamily(DataBrowser)
