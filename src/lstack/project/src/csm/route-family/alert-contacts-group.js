import { routeFamily } from '../../constructor'
import { AlertContact, AlertContactsGroups } from '../route'

export const AlertContactsGroup = routeFamily(undefined, AlertContact)

AlertContactsGroups.setFamily(AlertContactsGroup)
