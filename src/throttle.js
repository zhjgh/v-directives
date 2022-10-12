function _throttle(fn, delay = 1000) {
  let timer;
  return function () {
    const last = timer;
    const now = Date.now();
    if (!last) {
      timer = now;
      fn.apply(this, arguments);
      return;
    }
    if (last + delay > now) return;
    timer = now;
    fn.apply(this, arguments);
  }
}

export default {
  inserted(el, binding) {
    el.onclick = _throttle(binding.value, binding.arg)
  }
}
