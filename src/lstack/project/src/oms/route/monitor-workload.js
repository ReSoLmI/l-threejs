import { route } from '../../constructor'
import { Monitor } from './monitor'

export const MonitorWorkloads = route('MonitorWorkloads', '负载监控', 'workload', {}, Monitor)
export const MonitorWorkloadCpuMem = route('MonitorWorkloadCpuMem', 'CPU和内存', 'cpu-mem', {}, MonitorWorkloads)
export const MonitorWorkloadNetwork = route('MonitorWorkloadNetwork', '网络监控', 'network', {}, MonitorWorkloads)
export const MonitorWorkloadStorage = route('MonitorWorkloadStorage', '存储监控', 'storage', {}, MonitorWorkloads)
