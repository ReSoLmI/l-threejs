import queryMatch from './query-match'

/**
 * 挑拣出与 query 匹配的列表数据
 * @returns {*}
 * @param list
 * @param query
 * @param ignoreUndefined
 */
export default function queryPick(list, query, ignoreUndefined = true) {
  return queryMatch(list, query, 'Pick', ignoreUndefined)
}
