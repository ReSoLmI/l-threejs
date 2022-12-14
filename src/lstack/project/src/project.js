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

export const account = project('account', '????????????', '/account', consoleScope, accountRouteMap, accountRouteFamilyMap)
export const ahs = project('ahs', '??????????????????', '/ahs', consoleScope, ahsRouteMap, ahsRouteFamilyMap)
export const auth = project('auth', '??????', '/auth', consoleScope, authRouteMap)
export const ca = project('ca', '????????????', '/ca', consoleScope, caRouteMap)
export const console = project('console', '?????????', undefined, consoleScope, consoleRouteMap)
export const cpc = project('cpc', '??????????????????', '/cpc', consoleScope, cpcRouteMap, cpcRouteFamilyMap)
export const cpm = project('cpm', '??????????????????', '/cpm', consoleScope, cpmRouteMap, cpmRouteFamilyMap)
export const csm = project('csm', '???????????????', '/csm', consoleScope, csmRouteMap, csmRouteFamilyMap)
export const cnops = project('cnops', 'CNOps', '/cnops', consoleScope, cnopsRouteMap, cnopsRouteFamilyMap)
export const document = project('document', '????????????', '/document', consoleScope, documentRouteMap)
export const iam = project('iam', 'IAM ??????', '/iam', consoleScope, iamRouteMap, iamRouteFamilyMap)
export const lcr = project('lcr', '??????????????????', '/lcr', consoleScope, lcrRouteMap, lcrRouteFamilyMap)
export const lcs = project('lcs', '????????????', '/lcs', consoleScope, lcsRouteMap, lcsRouteFamilyMap)
export const ops = project('ops', 'License', '/ops', consoleScope, opsRouteMap)
export const uc = project('uc', '????????????', '/uc', consoleScope, ucRouteMap)
export const workorder = project(
  'workorder',
  '???????????????',
  '/workorder',
  consoleScope,
  workorderRouteMap,
  workorderRouteFamilyMap
)

export const oms = project('oms', '??????????????????', undefined, managerScope, omsRouteMap)

export const isv = project('isv', '????????????', '/isv', marketScope, isvRouteMap, isvRouteFamilyMap)
export const market = project('market', '?????????', undefined, marketScope, marketRouteMap)
export const sms = project('sms', '????????????', '/sms', marketScope, smsRouteMap)
export const tenant = project('tenant', '????????????', '/tenant', marketScope, tenantRouteMap, tenantRouteFamilyMap)

export const buy = project('buy', '????????????', '/buy', websiteScope, buyRouteMap)
export const website = project('home', '??????', undefined, websiteScope, websiteRouteMap)
