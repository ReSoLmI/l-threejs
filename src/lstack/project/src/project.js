import {
  console as consoleScope,
  market as marketScope,
  manager as managerScope,
  website as websiteScope,
} from './scope'
import { project } from './constructor'

// ----------- console --------------//
import * as accountRouteMap from './account/route'
import * as ahsRouteMap from './ahs/route'
import * as authRouteMap from './auth/route'
import * as caRouteMap from './ca/route'
import * as consoleRouteMap from './console/route'
import * as cpcRouteMap from './cpc/route'
import * as cpmRouteMap from './cpm/route'
import * as csmRouteMap from './csm/route'
import * as cnopsRouteMap from './cnops/route'
import * as iamRouteMap from './iam/route'
import * as lcrRouteMap from './lcr/route'
import * as lcsRouteMap from './lcs/route'
import * as opsRouteMap from './ops/route'
import * as ucRouteMap from './uc/route'
import * as workorderRouteMap from './workorder/route'

import * as lcsRouteFamilyMap from './lcs/route-family'
import * as cpcRouteFamilyMap from './cpc/route-family'
import * as cpmRouteFamilyMap from './cpm/route-family'
import * as cnopsRouteFamilyMap from './cnops/route-family'
import * as workorderRouteFamilyMap from './workorder/route-family'
import * as isvRouteFamilyMap from './isv/route-family'
import * as iamRouteFamilyMap from './iam/route-family'
import * as accountRouteFamilyMap from './account/route-family'
import * as tenantRouteFamilyMap from './tenant/route-family'
import * as ahsRouteFamilyMap from './ahs/route-family'
import * as csmRouteFamilyMap from './csm/route-family'
import * as lcrRouteFamilyMap from './lcr/route-family'

// ----------- manager --------------//
import * as omsRouteMap from './oms/route'

// ----------- market --------------//
import * as isvRouteMap from './isv/route'
import * as marketRouteMap from './market/route'
import * as smsRouteMap from './sms/route'
import * as tenantRouteMap from './tenant/route'

// ----------- website --------------//
import * as buyRouteMap from './buy/route'
import * as documentRouteMap from './document/route'
import * as websiteRouteMap from './website/route'

export const account = project('account', '账号管理', '/account', consoleScope, accountRouteMap, accountRouteFamilyMap)
export const ahs = project('ahs', '应用托管服务', '/ahs', consoleScope, ahsRouteMap, ahsRouteFamilyMap)
export const auth = project('auth', '登录', '/auth', consoleScope, authRouteMap)
export const ca = project('ca', '运营中心', '/ca', consoleScope, caRouteMap)
export const console = project('console', '控制台', undefined, consoleScope, consoleRouteMap)
export const cpc = project('cpc', '云服务商目录', '/cpc', consoleScope, cpcRouteMap, cpcRouteFamilyMap)
export const cpm = project('cpm', '云服务商监控', '/cpm', consoleScope, cpmRouteMap, cpmRouteFamilyMap)
export const csm = project('csm', '云服务监控', '/csm', consoleScope, csmRouteMap, csmRouteFamilyMap)
export const cnops = project('cnops', 'CNOps', '/cnops', consoleScope, cnopsRouteMap, cnopsRouteFamilyMap)
export const document = project('document', '帮助文档', '/document', consoleScope, documentRouteMap)
export const iam = project('iam', 'IAM 服务', '/iam', consoleScope, iamRouteMap, iamRouteFamilyMap)
export const lcr = project('lcr', '容器镜像服务', '/lcr', consoleScope, lcrRouteMap, lcrRouteFamilyMap)
export const lcs = project('lcs', '容器服务', '/lcs', consoleScope, lcsRouteMap, lcsRouteFamilyMap)
export const ops = project('ops', 'License', '/ops', consoleScope, opsRouteMap)
export const uc = project('uc', '用户中心', '/uc', consoleScope, ucRouteMap)
export const workorder = project(
  'workorder',
  '支持与服务',
  '/workorder',
  consoleScope,
  workorderRouteMap,
  workorderRouteFamilyMap
)

export const oms = project('oms', '运营管理后台', undefined, managerScope, omsRouteMap)

export const isv = project('isv', '卖家中心', '/isv', marketScope, isvRouteMap, isvRouteFamilyMap)
export const market = project('market', '云市场', undefined, marketScope, marketRouteMap)
export const sms = project('sms', '短信服务', '/sms', marketScope, smsRouteMap)
export const tenant = project('tenant', '买家中心', '/tenant', marketScope, tenantRouteMap, tenantRouteFamilyMap)

export const buy = project('buy', '产品购买', '/buy', websiteScope, buyRouteMap)
export const website = project('home', '主页', undefined, websiteScope, websiteRouteMap)
