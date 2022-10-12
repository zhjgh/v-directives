export default function (el, binding) {
  if (binding.arg) {
    el.style.display = '-webkit-box'
    el.style['-webkit-box-orient'] = 'vertical'
    el.style['-webkit-line-clamp'] = binding.arg
  } else {
    el.style.whiteSpace = 'nowrap'
  }
  el.style.overflow = 'hidden';
  el.style.textOverflow = 'ellipsis';
}