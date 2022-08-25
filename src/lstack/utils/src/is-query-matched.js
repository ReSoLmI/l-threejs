import logError from './log-error'
import removeAttrs from './remove-attrs'

/**
 * 返回指定数据与 query 的匹配结果
 * @param item
 * @param query
 * @param selectionStrategy
 * @param ignoreUndefined
 */
export default function isQueryMatched(item, query, selectionStrategy, ignoreUndefined = true) {
  let cQuery = query
  if (ignoreUndefined) {
    cQuery = removeAttrs(query, [undefined], true)
  }
  const queryKeys = Object.keys(cQuery)
  if (selectionStrategy === 'Filter') {
    return queryKeys.every(key => item[key] === cQuery[key])
  }
  if (selectionStrategy === 'Pick') {
    return queryKeys.some(key => item[key] === cQuery[key])
  }
  logError('刷选策略错误，请在 [Filter, Pick] 中选择一种策略。')
  return false
}
