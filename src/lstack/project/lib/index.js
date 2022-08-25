import * as ProjectMap from '../src/project'
import * as ScopeMap from '../src/scope'
import documentPermalink from '../src/document/permalink'

export * from '../src/project'
export const projects = Object.values(ProjectMap)
export const scopes = Object.values(ScopeMap)
export const projectMap = ProjectMap
export const scopeMap = ScopeMap
export const documentPermalinkMap = documentPermalink
