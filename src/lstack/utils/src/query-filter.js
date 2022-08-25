import queryMatch from './query-match'

/**
 * 从列表中剔除掉与 query 不匹配的数据
 * @returns {*}
 * @param list
 * @param query
 * @param ignoreUndefined
 */
export default function queryFilter(list, query, ignoreUndefined = true) {
  return queryMatch(list, query, 'Filter', ignoreUndefined)
}
