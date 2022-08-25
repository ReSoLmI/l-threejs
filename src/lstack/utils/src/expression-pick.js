import expressionMatch from './expression-match'

/**
 * 挑拣出与 expressions 表达式匹配的列表数据
 * @param list
 * @param expressions
 * @param matchMode
 * @returns {*[]|*}
 */
export default function expressionPick(list, expressions, matchMode) {
  return expressionMatch(list, expressions, matchMode, 'Pick')
}
