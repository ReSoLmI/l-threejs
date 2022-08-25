import { routeFamily } from '../../constructor'
import { Job as JobRoute, JobCreate, Jobs } from '../route'

export const Job = routeFamily(JobCreate, Jobs, JobRoute)

JobCreate.setFamily(Job)
Jobs.setFamily(Job)
JobRoute.setFamily(Job)
