import { route } from '../../constructor'
import { Index } from './account-index'

export const AccessKeys = route('AccessKeys', 'AccessKeys', 'access-keys', {}, Index)
export const AccessKeyCreate = route('AccessKeyCreate', '创建AccessKey', 'access-key-create', {}, Index)
export const AccessKeyUpdate = route('AccessKeyUpdate', '编辑AccessKey', 'access-key-update', {}, Index)
