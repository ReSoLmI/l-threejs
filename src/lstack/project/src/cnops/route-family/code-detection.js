import { routeFamily } from '../../constructor'
import { CodeDetections, CodeDetectionCreate } from '../route'

export const CodeDetectionFamily = routeFamily(CodeDetectionCreate, CodeDetections)

CodeDetections.setFamily(CodeDetectionFamily)
CodeDetectionCreate.setFamily(CodeDetectionFamily)
