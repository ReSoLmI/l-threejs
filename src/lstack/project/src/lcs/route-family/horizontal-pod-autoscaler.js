import { routeFamily } from '../../constructor'
import {
  HorizontalPodAutoscaler as HorizontalPodAutoscalerRoute,
  HorizontalPodAutoscalerCreate,
  HorizontalPodAutoscalerUpdate,
  HorizontalPodAutoscalers,
} from '../route'

export const HorizontalPodAutoscaler = routeFamily(
  HorizontalPodAutoscalerCreate,
  HorizontalPodAutoscalers,
  HorizontalPodAutoscalerRoute,
  HorizontalPodAutoscalerUpdate
)

HorizontalPodAutoscalerCreate.setFamily(HorizontalPodAutoscaler)
HorizontalPodAutoscalerUpdate.setFamily(HorizontalPodAutoscaler)
HorizontalPodAutoscalers.setFamily(HorizontalPodAutoscaler)
HorizontalPodAutoscalerRoute.setFamily(HorizontalPodAutoscaler)
