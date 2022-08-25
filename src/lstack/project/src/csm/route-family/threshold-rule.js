import { routeFamily } from '../../constructor'
import { ThresholdRules, ThresholdRuleCreate } from '../route'

export const ThresholdRule = routeFamily(ThresholdRuleCreate, ThresholdRules)

ThresholdRules.setFamily(ThresholdRule)
ThresholdRuleCreate.setFamily(ThresholdRule)
