import { routeFamily } from '../../constructor'
import { LogTransferCreate, LogTransfers, LogTransferUpdate } from '../route'

export const LogTransfer = routeFamily(LogTransferCreate, LogTransfers, undefined, LogTransferUpdate)

LogTransfers.setFamily(LogTransfer)
LogTransferCreate.setFamily(LogTransfer)
LogTransferUpdate.setFamily(LogTransfer)
