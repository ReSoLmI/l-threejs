import { route } from '../../constructor'
import { Index } from './csm-index'

export const EventLifeCycle = route('LifeCyclePageHub', '生命周期', 'life-cycle', {}, Index)
export const PodLifeCycle = route('PodLifeCycle', 'Pod 生命周期', 'pod', {}, EventLifeCycle)

EventLifeCycle.setRedirectRoute(PodLifeCycle)
