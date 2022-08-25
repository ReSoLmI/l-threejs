import { routeFamily } from '../../constructor'

import { WebShellSessionCreate } from '../route'

export const WebShellSession = routeFamily(WebShellSessionCreate)

WebShellSessionCreate.setFamily(WebShellSession)
