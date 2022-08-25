import lstackDoc from 'lstack-doc'
import { document } from '../project'

let base = document.index.getHref()
if (base.endsWith('/')) {
  base = base.substr(0, base.length - 1)
}

const allProject = {}
Object.keys(lstackDoc).forEach(projectKey => {
  const projectSource = lstackDoc[projectKey]
  const projectNew = {}
  Object.keys(projectSource).forEach(routeKey => {
    projectNew[routeKey] = `${base}${projectSource[routeKey]}`
  })
  allProject[projectKey] = projectNew
})
export default allProject
