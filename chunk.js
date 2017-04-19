import slice from './slice.js'

/**
 * chunk方法可以将一个数组按照某个size去分割成多个数组组成的一个数组
 *
 */
function chunk(array, size) {
    //默认值0
    size = Math.max(size, 0)
    //判断array是否为null来定义length
    const length = array == null ? 0 : array.length
    //非分割条件下 返回空数组
    if (!length || size < 1) {
        return []
    }
    // 设置index与resIndex的值
    let index = 0
    let resIndex = 0
    //创建新数组
    const result = new Array(Math.ceil(length / size))
    //调用slice 方法划分
    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}
export default chunk
