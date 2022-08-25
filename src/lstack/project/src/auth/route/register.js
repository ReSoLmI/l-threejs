import { route } from '../../constructor'
import { Index } from './auth-index'

export const Register = route('Register', '注册', 'register', {}, Index)
export const InvitationRegister = route('InvitationRegister', '邀请注册', 'invitation-register', {}, Index)
