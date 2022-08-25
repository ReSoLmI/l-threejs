import { routeFamily } from '../../constructor'
import { Secret as SecretRoute, SecretCreate, SecretUpdate, Secrets } from '../route'

export const Secret = routeFamily(SecretCreate, Secrets, SecretRoute, SecretUpdate)

SecretCreate.setFamily(Secret)
SecretUpdate.setFamily(Secret)
Secrets.setFamily(Secret)
SecretRoute.setFamily(Secret)
