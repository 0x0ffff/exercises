function throttle(fn, threshhold) {
  let timer, last;

  return function () {
    const context = this;
    const args = arguments;

    const now = +new Date();
    const remaining = last ? last + threshhold - now : 0;
    if (remaining > 0) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        last = +new Date();
        fn.apply(context, args);
      }, remaining);
    }
    // 第一次调用会执行，从上次执行开始超过阈值也会执行
    else {
      last = +new Date();
      fn.apply(context, args);
    }
  };
}

module.exports = throttle;
