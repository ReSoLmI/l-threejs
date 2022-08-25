import { routeFamily } from '../../constructor'

import {
  SecuritySettings as SecuritySettingRoute,
  IpMask,
  BindingPhone,
  ChangePhone,
  BindingEmail,
  SecuritySettings,
} from '../route'

export const SecuritySetting = routeFamily(SecuritySettingRoute, undefined, SecuritySettings)

IpMask.setFamily(SecuritySettingRoute)
BindingPhone.setFamily(SecuritySettingRoute)
ChangePhone.setFamily(SecuritySettingRoute)
BindingEmail.setFamily(SecuritySettingRoute)
SecuritySettings.setFamily(SecuritySetting)
