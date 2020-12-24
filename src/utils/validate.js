/**
 * @param {string} path 判断字符串是否是https?:|mailto:|tal: 开头的
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
