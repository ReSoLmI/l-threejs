import { route } from '../../constructor'
import { Index } from './cnops-index'

export const Approvals = route('Approvals', '审批列表', 'approvals', {}, Index)
export const Approval = route('Approval', '审批详情', 'approval', {}, Index)
export const ApprovalPending = route('ApprovalPending', '资源审批', 'approval-pending', {}, Index)
