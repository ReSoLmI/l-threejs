import { routeFamily } from '../../constructor'
import { ImageRegistries, ImageRegistryCreate, ImageRegistryUpdate } from '../route'

export const ImageRegistryFamily = routeFamily(ImageRegistryCreate, ImageRegistries, undefined, ImageRegistryUpdate)

ImageRegistryCreate.setFamily(ImageRegistryFamily)
ImageRegistries.setFamily(ImageRegistryFamily)
ImageRegistryUpdate.setFamily(ImageRegistryFamily)
