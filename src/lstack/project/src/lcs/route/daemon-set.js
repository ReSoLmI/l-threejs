import { route } from '../../constructor'
import { Index } from './lcs-index'

export const DaemonSets = route('DaemonSets', '守护进程集', 'daemon-sets', {}, Index)
export const DaemonSet = route(
  'DaemonSet',
  '守护进程集',
  'daemon-set',
  { clusterId: undefined, namespace: undefined, name: undefined },
  Index
)
export const DaemonSetCreate = route('DaemonSetCreate', '创建守护进程集', 'daemon-set-create', {}, Index)
export const DaemonSetUpdate = route(
  'DaemonSetUpdate',
  '修改守护进程集',
  'daemon-set-update',
  { clusterId: undefined, namespace: undefined, name: undefined },
  Index
)
