/**
 *  此js文件主要包含日期方面的工具函数
 */


/**
 * 获取当前时间的n天后的时间戳
 * @param {number} n 天数
 * @returns {Number} 返回值为时间毫秒值
 */
function toNextTimes(n) {
    var timestamp = +new Date() + n * 86400000;
    return timestamp;
}