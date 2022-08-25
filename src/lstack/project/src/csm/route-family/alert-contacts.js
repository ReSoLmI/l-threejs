import { routeFamily } from '../../constructor'
import { AlertContact as AlertContactRoute, AlertContacts } from '../route'

export const AlertContact = routeFamily(undefined, AlertContactRoute)

AlertContacts.setFamily(AlertContact)
AlertContactRoute.setFamily(AlertContact)
