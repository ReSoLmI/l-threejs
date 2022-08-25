import { route } from '../../constructor'
import { Index } from './website-index'

export const Saas = route('Saas', 'LStack Nebula SaaS-LStack 朗澈科技', 'saas', {}, Index)
export const SaasDedicated = route(
  'SaasDedicated',
  'LStack Nebula SaaS 专业版-LStack 朗澈科技',
  'saas-dedicated',
  {},
  Saas
)
export const SaasManaged = route('SaasManaged', 'LStack Nebula SaaS 托管版-LStack 朗澈科技', 'saas-managed', {}, Saas)
export const SaasDeveloper = route(
  'SaasDeveloper',
  'LStack Nebula SaaS 开发者版-LStack 朗澈科技',
  'saas-developer',
  {},
  Saas
)
