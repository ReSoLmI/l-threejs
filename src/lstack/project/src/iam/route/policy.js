import { route } from '../../constructor'
import { Index } from './iam-index'

export const Policies = route('Policies', '权限策略管理', 'policies', {}, Index)
export const PolicyCreate = route('PolicyCreate', '创建策略', 'policy-create', {}, Index)
export const Policy = route('Policy', '策略详情', 'policy', {}, Index)
