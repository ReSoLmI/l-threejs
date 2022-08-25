import { route } from '../../constructor'
import { Index } from './account-index'

export const SecuritySettings = route('SecuritySettings', '安全设置', 'security-settings', {}, Index)
export const IpMask = route('IpMask', 'IP访问控制', 'ip-mask', {}, Index)
export const ActivateEmail = route('ActivateEmail', '激活邮箱', 'activate-email', {}, Index)
export const ActivateEmailTip = route('ActivateEmailTip', '激活邮箱', 'activate-email-tip', {}, Index)
export const BindingEmail = route('BindingEmail', '绑定邮箱', 'binding-email', {}, Index)
export const BindingPhone = route('BindingPhone', '绑定手机', 'binding-phone', {}, Index)
export const ChangePhone = route('ChangePhone', '修改手机', 'change-phone', {}, Index)

Index.setRedirectRoute(SecuritySettings)
