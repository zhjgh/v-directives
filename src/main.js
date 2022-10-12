import webp from './webp'
import debounce from './debounce'
import throttle from './throttle'
import copy from './copy'
import expandClick from './expandClick'
import ellipsis from './ellipsis'
import empty from './empty'
import format from './format'
import lazyLoad from './lazyLoad'

// 自定义指令
const directives = {
  webp,
  debounce,
  throttle,
  copy,
  expandClick,
  ellipsis,
  empty,
  format,
  lazyLoad,
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}