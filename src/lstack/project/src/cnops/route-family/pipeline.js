import { routeFamily } from '../../constructor'
import { Pipelines, Pipeline, PipelineCreate, PipelineUpdate } from '../route'

export const PipelineFamily = routeFamily(PipelineCreate, Pipelines, Pipeline, PipelineUpdate)

Pipelines.setFamily(PipelineFamily)
PipelineCreate.setFamily(PipelineFamily)
Pipeline.setFamily(PipelineFamily)
PipelineUpdate.setFamily(PipelineFamily)
