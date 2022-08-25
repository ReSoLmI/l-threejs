import { route } from '../../constructor'
import { Monitor } from './monitor'

export const MonitorClusters = route('MonitorClusters', '集群监控', 'cluster', {}, Monitor)
export const MonitorClusterCpuMem = route('MonitorClusterCpuMem', 'CPU和内存', 'cpu-mem', {}, MonitorClusters)
export const MonitorClusterNetwork = route('MonitorClusterNetwork', '网络监控', 'network', {}, MonitorClusters)
export const MonitorClusterStorage = route('MonitorClusterStorage', '存储监控', 'storage', {}, MonitorClusters)
