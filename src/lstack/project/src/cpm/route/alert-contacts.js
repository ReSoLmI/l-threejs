import { route } from '../../constructor'
import { AlertContactsPageHub } from './alert-contacts-pagehub'

export const AlertContacts = route('AlertContacts', '告警联系人', 'contacts', {}, AlertContactsPageHub)

AlertContactsPageHub.setRedirectRoute(AlertContacts)
