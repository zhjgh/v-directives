function _isEmpty(val) {
  if (val == 'undefined' || val == 'null' || val == '' || val == '{}') {
    return '';
  } else {
    return val;
  }
}

export default {
  bind(el, binding) {
    const value = _isEmpty(binding.value)
    el.innerText = value
  },
  update(el, binding) {
    const value = _isEmpty(binding.value)
    el.innerText = value
  }
}