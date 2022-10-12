const isSupportWebp = document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0;

const _webp = (el, binding, vnode) => {
  if (binding.value.indexOf('imageMogr2') !== -1 || binding.value.indexOf('imageMogr2') !== -1) {
    console.log('v-webp提示：暂不不支持额外imageMogr2属性')
  }

  const tag = vnode.tag === 'img' ? 'img' : 'div'
  const params = `${isSupportWebp ? '/format/webp' : ''}${binding.arg ? '/interlace/1' : ''}/ignore-error/1`
  const attributeValue = `${binding.value}${binding.value.indexOf('imageView2') !== -1 ? '' : '?imageMogr2'}${params}`

  if (tag === 'img') {
    el.setAttribute('src', attributeValue)
  } else {
    //预加载
    let div = document.createElement('div')
    div.style.backgroundImage = `url('${attributeValue}')`
    div.style.position = 'absolute'
    div.style.left = '-9999px'
    div.style.top = '-9999px'
    document.getElementsByTagName('body')[0].appendChild(div)
    el.style.backgroundImage = `url('${attributeValue}')`
  }
}

export default {
  bind(el, binding, vnode) {
    _webp(el, binding, vnode)
  },
  update(el, binding, vnode, oldVnode) {
    if (vnode.data.directives[0].value === oldVnode.data.directives[0].value) return
    _webp(el, binding, vnode)
  }
}
