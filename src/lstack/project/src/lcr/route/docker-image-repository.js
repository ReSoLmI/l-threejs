import { route } from '../../constructor'
import { Image } from './image'

export const DockerImageRepository = route('DockerImageRepository', '官方镜像', 'docker-image-repository', {}, Image)

Image.setRedirectRoute(DockerImageRepository)
