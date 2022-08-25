import { route } from '../../constructor'
import { ProjectIndex } from './cnops-index'

export const ProductRepositories = route(
  'ProductRepositories',
  '制品仓库',
  'product-repositories',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)

export const ProductRepositoryCreate = route(
  'ProductRepositoryCreate',
  '新建制品仓库',
  'product-repository-create',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)

export const ProductRepositoryUpdate = route(
  'ProductRepositoryUpdate',
  '修改制品仓库',
  'product-repository-update',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)

export const ProductRepository = route(
  'ProductRepository',
  '制品仓库详情',
  'product-repository',
  { projectId: undefined, projectName: undefined },
  ProjectIndex
)
