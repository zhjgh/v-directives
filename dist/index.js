(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/copy.js":
/*!*********************!*\
  !*** ./src/copy.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bind(el, binding) {\n    el.targetContent = binding.value;\n    el.addEventListener('click', () => {\n      if (!el.targetContent) return console.warn('没有需要复制的目标内容');\n      // 创建textarea标签\n      const textarea = document.createElement('textarea');\n      // 设置相关属性\n      textarea.readOnly = 'readonly';\n      textarea.style.position = 'fixed';\n      textarea.style.top = '-99999px';\n      // 把目标内容赋值给它的value属性\n      textarea.value = el.targetContent;\n      // 插入到页面\n      document.body.appendChild(textarea);\n      // 调用onselect()方法\n      textarea.select();\n      // 把目标内容复制进剪贴板, 该API会返回一个Boolean\n      const res = document.execCommand('Copy');\n      res && console.log('复制成功，剪贴板内容：' + el.targetContent);\n      // 移除textarea标签\n      document.body.removeChild(textarea);\n    })\n  },\n  update(el, binding) {\n    // 实时更新最新的目标内容\n    el.targetContent = binding.value;\n  },\n  unbind(el) {\n    el.removeEventListener('click', () => { })\n  }\n});\n\n//# sourceURL=webpack:///./src/copy.js?");

/***/ }),

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nfunction _debounce(fn, delay = 1000) {\n  let timer = null\n  return function (...args) {\n    clearTimeout(timer)\n    timer = setTimeout(() => {\n      fn.apply(this, args)\n    }, delay)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  inserted(el, binding) {\n    el.onclick = _debounce(binding.value, binding.arg)\n  }\n});\n\n\n//# sourceURL=webpack:///./src/debounce.js?");

/***/ }),

/***/ "./src/ellipsis.js":
/*!*************************!*\
  !*** ./src/ellipsis.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el, binding) {\n  if (binding.arg) {\n    el.style.display = '-webkit-box'\n    el.style['-webkit-box-orient'] = 'vertical'\n    el.style['-webkit-line-clamp'] = binding.arg\n  } else {\n    el.style.whiteSpace = 'nowrap'\n  }\n  el.style.overflow = 'hidden';\n  el.style.textOverflow = 'ellipsis';\n});\n\n//# sourceURL=webpack:///./src/ellipsis.js?");

/***/ }),

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _isEmpty(val) {\n  if (val == 'undefined' || val == 'null' || val == '' || val == '{}') {\n    return '';\n  } else {\n    return val;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bind(el, binding) {\n    const value = _isEmpty(binding.value)\n    el.innerText = value\n  },\n  update(el, binding) {\n    const value = _isEmpty(binding.value)\n    el.innerText = value\n  }\n});\n\n//# sourceURL=webpack:///./src/empty.js?");

/***/ }),

/***/ "./src/expandClick.js":
/*!****************************!*\
  !*** ./src/expandClick.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el, binding) {\n  const s = document.styleSheets[document.styleSheets.length - 1]\n  const DEFAULT = 10 // 默认向外扩展10px\n  const [top, right, bottom, left] = binding.expression && binding.expression.split(',') || []\n  const ruleStr = `content:\"\";position:absolute;top:-${top || DEFAULT}px;bottom:-${bottom || DEFAULT}px;right:-${right || DEFAULT}px;left:-${left || DEFAULT}px;`\n  const classNameList = el.className.split(' ')\n  el.className = classNameList.includes('expand_click_range') ? classNameList.join(' ') : [...classNameList, 'expand_click_range'].join(' ')\n  el.style.position = el.style.position || \"relative\"\n  if (s.insertRule) {\n    s.insertRule('.expand_click_range::before' + '{' + ruleStr + '}', s.cssRules.length)\n  } else { /* IE */\n    s.addRule('.expand_click_range::before', ruleStr, -1)\n  }\n});\n\n//# sourceURL=webpack:///./src/expandClick.js?");

/***/ }),

/***/ "./src/format.js":
/*!***********************!*\
  !*** ./src/format.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction formatNumber(num) {\n  num += '';\n  let strs = num.split('.');\n  let x1 = strs[0];\n  let x2 = strs.length > 1 ? '.' + strs[1] : '';\n  var rgx = /(\\d+)(\\d{3})/;\n  while (rgx.test(x1)) {\n    x1 = x1.replace(rgx, '$1' + ',' + '$2');\n  }\n  return x1 + x2\n}\n\nfunction _format(binding) {\n  const { value, modifiers } = binding\n  if (!value) return\n  let formatValue = value\n  if (modifiers.toFixed) {\n    formatValue = value.toFixed(2)\n  }\n  console.log(formatValue)\n  if (modifiers.price) {\n    formatValue = formatNumber(formatValue)\n  }\n  return formatValue\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bind(el, binding) {\n    const value = _format(binding)\n    el.innerText = value\n  },\n  update(el, binding) {\n    const value = _format(binding)\n    el.innerText = value\n  },\n});\n\n//# sourceURL=webpack:///./src/format.js?");

/***/ }),

/***/ "./src/lazyLoad.js":
/*!*************************!*\
  !*** ./src/lazyLoad.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nif (!Array.prototype.remove) {\n  Array.prototype.remove = function (item) {\n    if (!this.length) return\n    var index = this.indexOf(item);\n    if (index > -1) {\n      this.splice(index, 1);\n      return this\n    }\n  }\n}\n// let defaultSrc = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.tongliaowang.com%2Ffiles%2Ftlfiles%2Fimages%2F1708%2F14%2F20170814003404204842.jpg&refer=http%3A%2F%2Fstatic.tongliaowang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668067152&t=7e349006f462f6f30c6cd97cadd9995b'\n//需要进行监听的图片列表，还没有加载过得 \nlet listenList = []\n//已经加载过得图片缓存列表\nlet imageCatcheList = []\n\nconst isAlredyLoad = (imageSrc) => {\n  if (imageCatcheList.indexOf(imageSrc) > -1) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n//检测图片是否可以加载，如果可以则进行加载\nconst isCanShow = (item) => {\n  const { ele, src } = item;\n  //图片距离页面顶部的距离\n  const top = ele.getBoundingClientRect().top;\n  //页面可视区域的高度\n  const clientHeight = document.documentElement.clientHeight;\n  //top + 10 已经进入了可视区域10像素\n  if (top + 10 < clientHeight) {\n    let image = new Image();\n    image.src = src;\n    image.onload = function () {\n      ele.src = src;\n      imageCatcheList.push(src);\n      listenList.remove(item);\n    }\n    return true;\n  } else {\n    return false;\n  }\n};\n\n//添加监听事件scroll\nconst onListenScroll = () => {\n  window.addEventListener('scroll', function () {\n    var length = listenList.length;\n    for (let i = 0; i < length; i++) {\n      isCanShow(listenList[i]);\n    }\n  })\n}\n\nconst addListener = (ele, binding) => {\n\n  // 绑定的图片地址\n  let imageSrc = binding.value;\n  // 如果已经加载过，则无需重新加载，直接将src赋值\n  if (isAlredyLoad(imageSrc)) {\n    ele.src = imageSrc;\n    return false;\n  }\n  let item = {\n    ele: ele,\n    src: imageSrc\n  }\n  // 图片显示默认的图片\n  // ele.src = defaultSrc;\n  // 再看看是否可以显示此图片\n  if (isCanShow(item)) {\n    return\n  }\n  // 否则将图片地址和元素均放入监听的lisenList里\n  listenList.push(item);\n  // 然后开始监听页面scroll事件\n  onListenScroll();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  inserted: addListener,\n  update: addListener,\n});\n\n//# sourceURL=webpack:///./src/lazyLoad.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webp */ \"./src/webp.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ \"./src/debounce.js\");\n/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ \"./src/throttle.js\");\n/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy */ \"./src/copy.js\");\n/* harmony import */ var _expandClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expandClick */ \"./src/expandClick.js\");\n/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ellipsis */ \"./src/ellipsis.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format */ \"./src/format.js\");\n/* harmony import */ var _lazyLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lazyLoad */ \"./src/lazyLoad.js\");\n\n\n\n\n\n\n\n\n\n\n// 自定义指令\nconst directives = {\n  webp: _webp__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  debounce: _debounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  throttle: _throttle__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  copy: _copy__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  expandClick: _expandClick__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  ellipsis: _ellipsis__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  empty: _empty__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  format: _format__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  lazyLoad: _lazyLoad__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install(app) {\n    Object.keys(directives).forEach(key => {\n      app.directive(key, directives[key])\n    })\n  }\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/throttle.js":
/*!*************************!*\
  !*** ./src/throttle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _throttle(fn, delay = 1000) {\n  let timer;\n  return function () {\n    const last = timer;\n    const now = Date.now();\n    if (!last) {\n      timer = now;\n      fn.apply(this, arguments);\n      return;\n    }\n    if (last + delay > now) return;\n    timer = now;\n    fn.apply(this, arguments);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  inserted(el, binding) {\n    el.onclick = _throttle(binding.value, binding.arg)\n  }\n});\n\n\n//# sourceURL=webpack:///./src/throttle.js?");

/***/ }),

/***/ "./src/webp.js":
/*!*********************!*\
  !*** ./src/webp.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst isSupportWebp = document.createElement(\"canvas\").toDataURL(\"image/webp\").indexOf(\"data:image/webp\") === 0;\n\nconst _webp = (el, binding, vnode) => {\n  if (binding.value.indexOf('imageMogr2') !== -1 || binding.value.indexOf('imageMogr2') !== -1) {\n    console.log('v-webp提示：暂不不支持额外imageMogr2属性')\n  }\n\n  const tag = vnode.tag === 'img' ? 'img' : 'div'\n  const params = `${isSupportWebp ? '/format/webp' : ''}${binding.arg ? '/interlace/1' : ''}/ignore-error/1`\n  const attributeValue = `${binding.value}${binding.value.indexOf('imageView2') !== -1 ? '' : '?imageMogr2'}${params}`\n\n  if (tag === 'img') {\n    el.setAttribute('src', attributeValue)\n  } else {\n    //预加载\n    let div = document.createElement('div')\n    div.style.backgroundImage = `url('${attributeValue}')`\n    div.style.position = 'absolute'\n    div.style.left = '-9999px'\n    div.style.top = '-9999px'\n    document.getElementsByTagName('body')[0].appendChild(div)\n    el.style.backgroundImage = `url('${attributeValue}')`\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bind(el, binding, vnode) {\n    _webp(el, binding, vnode)\n  },\n  update(el, binding, vnode, oldVnode) {\n    if (vnode.data.directives[0].value === oldVnode.data.directives[0].value) return\n    _webp(el, binding, vnode)\n  }\n});\n\n\n//# sourceURL=webpack:///./src/webp.js?");

/***/ })

/******/ });
});