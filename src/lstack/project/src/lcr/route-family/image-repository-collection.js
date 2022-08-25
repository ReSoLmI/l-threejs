import { routeFamily } from '../../constructor'
import { ImageRepositoryCollection } from '../route'

export const ImageRepositoryCollectionFamily = routeFamily(undefined, ImageRepositoryCollection)

ImageRepositoryCollection.setFamily(ImageRepositoryCollectionFamily)
