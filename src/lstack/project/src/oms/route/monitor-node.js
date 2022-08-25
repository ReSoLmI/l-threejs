import { route } from '../../constructor'
import { Monitor } from './monitor'

export const MonitorNodes = route('MonitorNodes', '集群监控', 'node', {}, Monitor)
export const MonitorNodeCpuMem = route('MonitorNodeCpuMem', 'CPU和内存', 'cpu-mem', {}, MonitorNodes)
export const MonitorNodeNetwork = route('MonitorNodeNetwork', '网络监控', 'network', {}, MonitorNodes)
export const MonitorNodeStorage = route('MonitorNodeStorage', '存储监控', 'storage', {}, MonitorNodes)
