import { route } from '../../constructor'
import { Index } from './ahs-index'

export const EdgeNodes = route('EdgeNodes', '边缘节点池', 'edge-nodes', {}, Index)
export const EdgeNode = route('EdgeNode', '边缘节点池', 'edge-node', { poolName: undefined }, Index)
export const EdgeNodeCreate = route('EdgeNodeCreate', '边缘节点池创建', 'edge-node-create', {}, Index)
export const EdgeNodeUpdate = route('EdgeNodeUpdate', '边缘节点池修改', 'edge-node-update', { name: undefined }, Index)
