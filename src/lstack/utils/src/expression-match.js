import isExpressionMatched from './is-expression-matched'
import isExpressionsMatched from './is-expressions-matched'
import isArray from './is-array'
import isObject from './is-object'

/**
 * 通过 expressions 表达式（数组）过滤列表中与其匹配的数据并返回
 * @param list
 * @param expressions
 * @param matchMode
 * @param selectionStrategy
 * @returns {*[]|*}
 */
export default function expressionMatch(list, expressions, matchMode, selectionStrategy = 'Filter') {
  if (!isArray(list)) return []
  if (!isArray(expressions) && !isObject(expressions)) return selectionStrategy === 'Pick' ? [] : list
  if (isObject(expressions)) {
    return list.filter(item => {
      return isExpressionMatched(item, expressions, matchMode)
    })
  }
  return list.filter(item => {
    return isExpressionsMatched(item, expressions, matchMode, selectionStrategy)
  })
}
