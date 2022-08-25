import { routeFamily } from '../../constructor'

import { NamespaceCreate, Namespaces } from '../route'

export const Namespace = routeFamily(NamespaceCreate, Namespaces)

NamespaceCreate.setFamily(Namespace)
Namespaces.setFamily(Namespace)
