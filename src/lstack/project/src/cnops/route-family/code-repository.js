import { routeFamily } from '../../constructor'
import { CodeRepositories, CodeRepositoryCreate } from '../route'

export const CodeRepositoryFamily = routeFamily(CodeRepositoryCreate, CodeRepositories)

CodeRepositories.setFamily(CodeRepositoryFamily)
CodeRepositoryCreate.setFamily(CodeRepositoryFamily)
