function map() {
  const [arr, fn, thisArg] = [].slice.call(arguments);
  const result = new Array(arr.length);

  if (typeof fn !== "function") {
    throw new TypeError(fn + "is not a function");
  }

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result[i] = fn.call(thisArg, arr[i], i, arr);
    }
  }

  return result;
}

module.exports = map;
