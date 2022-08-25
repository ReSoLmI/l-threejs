import expressionMatch from './expression-match'

/**
 * 从列表中剔除掉与 expressions 表达式不匹配的数据
 * @param list
 * @param expressions
 * @param matchMode
 * @returns {*[]|*}
 */
export default function expressionFilter(list, expressions, matchMode) {
  return expressionMatch(list, expressions, matchMode, 'Filter')
}
