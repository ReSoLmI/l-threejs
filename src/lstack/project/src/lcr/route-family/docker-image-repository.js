import { routeFamily } from '../../constructor'
import { DockerImageRepository } from '../route'

export const DockerImageRepositoryFamily = routeFamily(undefined, DockerImageRepository)

DockerImageRepository.setFamily(DockerImageRepositoryFamily)
