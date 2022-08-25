import { routeFamily } from '../../constructor'
import { ImageOrganizations, ImageOrganizationCreate } from '../route'

export const ImageOrganizationFamily = routeFamily(ImageOrganizationCreate, ImageOrganizations)

ImageOrganizationCreate.setFamily(ImageOrganizationFamily)
ImageOrganizations.setFamily(ImageOrganizationFamily)
