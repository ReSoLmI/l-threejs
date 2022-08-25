import { routeFamily } from '../../constructor'
import { ThresholdRules, ThresholdRuleCreate } from '../route'

export const ThresholdRuleFamily = routeFamily(ThresholdRuleCreate, ThresholdRules)

ThresholdRuleCreate.setFamily(ThresholdRuleFamily)
ThresholdRules.setFamily(ThresholdRuleFamily)
