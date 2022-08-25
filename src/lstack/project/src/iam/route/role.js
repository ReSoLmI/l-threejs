import { route } from '../../constructor'
import { Index } from './iam-index'

export const Roles = route('Roles', '角色管理', 'roles', {}, Index)
export const RoleCreate = route('RoleCreate', '创建角色', 'role-create', {}, Index)
export const RoleUpdate = route('RoleUpdate', '修改角色', 'role-update', {}, Index)
export const Role = route('Role', '角色详情', 'role', {}, Index)
