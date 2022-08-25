import { route } from '../../constructor'
import { Index } from './account-index'

export const AccessKeyGroups = route('AccessKeyGroups', 'AccessKey 组', 'access-key-group', {}, Index)
export const AccessKeyGroupCreate = route(
  'AccessKeyGroupCreate',
  '创建AccessKey组',
  'access-key-group-create',
  {},
  Index
)
export const AccessKeyGroupUpdate = route(
  'AccessKeyGroupUpdate',
  '编辑AccessKey组',
  'access-key-group-update',
  {},
  Index
)
export const AccessKeyGroup = route('AccessKeyGroup', 'AccessKey组详情', 'access-key-group', {}, Index)
