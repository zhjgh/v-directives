if (!Array.prototype.remove) {
  Array.prototype.remove = function (item) {
    if (!this.length) return
    var index = this.indexOf(item);
    if (index > -1) {
      this.splice(index, 1);
      return this
    }
  }
}
// let defaultSrc = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.tongliaowang.com%2Ffiles%2Ftlfiles%2Fimages%2F1708%2F14%2F20170814003404204842.jpg&refer=http%3A%2F%2Fstatic.tongliaowang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668067152&t=7e349006f462f6f30c6cd97cadd9995b'
//需要进行监听的图片列表，还没有加载过得 
let listenList = []
//已经加载过得图片缓存列表
let imageCatcheList = []

const isAlredyLoad = (imageSrc) => {
  if (imageCatcheList.indexOf(imageSrc) > -1) {
    return true;
  } else {
    return false;
  }
}

//检测图片是否可以加载，如果可以则进行加载
const isCanShow = (item) => {
  const { ele, src } = item;
  //图片距离页面顶部的距离
  const top = ele.getBoundingClientRect().top;
  //页面可视区域的高度
  const clientHeight = document.documentElement.clientHeight;
  //top + 10 已经进入了可视区域10像素
  if (top + 10 < clientHeight) {
    let image = new Image();
    image.src = src;
    image.onload = function () {
      ele.src = src;
      imageCatcheList.push(src);
      listenList.remove(item);
    }
    return true;
  } else {
    return false;
  }
};

//添加监听事件scroll
const onListenScroll = () => {
  window.addEventListener('scroll', function () {
    var length = listenList.length;
    for (let i = 0; i < length; i++) {
      isCanShow(listenList[i]);
    }
  })
}

const addListener = (ele, binding) => {

  // 绑定的图片地址
  let imageSrc = binding.value;
  // 如果已经加载过，则无需重新加载，直接将src赋值
  if (isAlredyLoad(imageSrc)) {
    ele.src = imageSrc;
    return false;
  }
  let item = {
    ele: ele,
    src: imageSrc
  }
  // 图片显示默认的图片
  // ele.src = defaultSrc;
  // 再看看是否可以显示此图片
  if (isCanShow(item)) {
    return
  }
  // 否则将图片地址和元素均放入监听的lisenList里
  listenList.push(item);
  // 然后开始监听页面scroll事件
  onListenScroll();
}

export default {
  inserted: addListener,
  update: addListener,
}