import { routeFamily } from '../../constructor'
import { Certificate as CertificateRoute, Certificates, CertificateCreate } from '../route'

export const Certificate = routeFamily(CertificateCreate, Certificates, CertificateRoute)

Certificates.setFamily(Certificate)
CertificateRoute.setFamily(Certificate)
CertificateCreate.setFamily(Certificate)
