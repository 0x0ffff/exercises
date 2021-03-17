/**
 * 二分搜索，时间复杂度 O(logn)，空间复杂度 O(1)
 * @param {Array} arr
 * @param {*} item
 * @returns
 */
const binarySearch = (arr, item) => {
  var low = 0,
    high = arr.length - 1,
    mid,
    element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arr[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

module.exports = binarySearch;
