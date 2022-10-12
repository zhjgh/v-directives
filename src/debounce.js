
function _debounce(fn, delay = 1000) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default {
  inserted(el, binding) {
    el.onclick = _debounce(binding.value, binding.arg)
  }
}
