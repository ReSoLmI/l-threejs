import { route } from '../../constructor'
import { Index } from './website-index'

export const Solution = route('Solution', '解决方案-LStack 朗澈科技', 'solution', {}, Index)
export const Hybrid = route('Hybrid', '边云协同解决方案-LStack 朗澈科技', 'hybrid', {}, Solution)
export const AppManaged = route('AppManaged', '云原生应用托管方案-LStack 朗澈科技', 'app-managed', {}, Solution)
export const HybridCloud = route('HybridCloud', '混合云解决方案-LStack 朗澈科技', 'hybrid-cloud', {}, Solution)
export const ContainerHybridCloud = route(
  'ContainerHybridCloud',
  '容器混合云解决方案-LStack 朗澈科技',
  'container-hybrid-cloud',
  {},
  Solution
)
export const Medical = route('Medical', '医疗解决方案-LStack 朗澈科技', 'medical', {}, Solution)
export const Water = route('Water', '水利工程解决方案-LStack 朗澈科技', 'water', {}, Solution)
export const AgricultureBase = route(
  'AgricultureBase',
  '农业基地解决方案-LStack 朗澈科技',
  'agriculture-base',
  {},
  Solution
)
