import { routeFamily } from '../../constructor'
import { ProductRepositories, ProductRepository, ProductRepositoryCreate, ProductRepositoryUpdate } from '../route'

export const ProductRepositoryFamily = routeFamily(
  ProductRepositoryCreate,
  ProductRepositories,
  ProductRepository,
  ProductRepositoryUpdate
)

ProductRepositoryCreate.setFamily(ProductRepositoryFamily)
ProductRepositories.setFamily(ProductRepositoryFamily)
ProductRepository.setFamily(ProductRepositoryFamily)
ProductRepositoryUpdate.setFamily(ProductRepositoryFamily)
