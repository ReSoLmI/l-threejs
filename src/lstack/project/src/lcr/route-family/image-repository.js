import { routeFamily } from '../../constructor'
import { ImageRepositories } from '../route'

export const ImageRepositoryFamily = routeFamily(undefined, ImageRepositories)

ImageRepositories.setFamily(ImageRepositoryFamily)
