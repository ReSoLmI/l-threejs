import { routeFamily } from '../../constructor'
import { Approvals, Approval, ApprovalPending } from '../route'

export const ApprovalFamily = routeFamily(undefined, Approvals, Approval, ApprovalPending)

Approvals.setFamily(ApprovalFamily)
Approval.setFamily(ApprovalFamily)
ApprovalPending.setFamily(ApprovalFamily)
