import { routeFamily } from '../../constructor'

import { RealNameCert as RealNameCertRoute, UserCertificationCreate, CompanyCertificationCreate } from '../route'

export const RealNameCert = routeFamily(UserCertificationCreate, CompanyCertificationCreate, RealNameCertRoute)

UserCertificationCreate.setFamily(RealNameCert)
CompanyCertificationCreate.setFamily(RealNameCert)
RealNameCertRoute.setFamily(RealNameCert)
