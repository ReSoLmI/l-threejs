import { routeFamily } from '../../constructor'
import { LogTransferCreate, LogTransfers, LogTransferUpdate } from '../route'

export const LogTransferFamily = routeFamily(LogTransferCreate, LogTransfers, undefined, LogTransferUpdate)

LogTransferCreate.setFamily(LogTransferFamily)
LogTransfers.setFamily(LogTransferFamily)
LogTransferUpdate.setFamily(LogTransferFamily)
