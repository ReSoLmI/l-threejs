import logError from './log-error'
import isExpressionMatched from './is-expression-matched'

/**
 * 返回指定对象数据与指定表达式数组的匹配结果
 * @returns {boolean}
 * @param item
 * @param expressions
 * @param matchMode
 * @param selectionStrategy
 */
export default function isExpressionsMatched(item, expressions, matchMode, selectionStrategy) {
  if (selectionStrategy === 'Filter') {
    return expressions.every(expression => isExpressionMatched(item, expression, matchMode))
  }
  if (selectionStrategy === 'Pick') {
    return expressions.some(expression => isExpressionMatched(item, expression, matchMode))
  }
  logError('刷选策略错误，请在 [Filter, Pick] 中选择一种策略。')
  return false
}
