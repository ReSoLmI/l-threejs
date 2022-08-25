import { route } from '../../constructor'
import { Index } from './website-index'

export const Product = route('Product', '产品-LStack 朗澈科技', 'introduction', {}, Index)
export const NebulaPlatform = route(
  'NebulaPlatform',
  'LStack Nebula Platform-LStack 朗澈科技',
  'nebula-platform',
  {},
  Product
)
export const Edges = route('Edges', 'LStack Nebula 云原生一体机-LStack 朗澈科技', 'edges', {}, Product)
