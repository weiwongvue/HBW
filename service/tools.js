let tools = {

  // 通过id获取当前元素
  ele: function (id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
  },

  // 改变元素样式值
  changeCssStyle(eleObj, attr, value) {
    eleObj.style[attr] = value;
  },

  // 获取元素样式值
  getStyleAttr(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return window.getComputedStyle(obj, null)[attr];
    }
  },

  // 动画
  buffer: function (eleObj, json, fn) {

    clearInterval(eleObj.timer);

    let speed = 0, begin = 0, target = 0, flag = false;

    eleObj.timer = setInterval(() => {
      flag = true;

      for (const key in json) {
        if (json.hasOwnProperty(key)){
          if (key === 'opacity') {
            begin = parseInt(tools.getStyleAttr(eleObj, key) * 100 + "") || 100;
            target = parseInt(json[key] * 100 + "");
          } else {
            begin = parseInt(tools.getStyleAttr(eleObj, key)) || 0;
            target = parseInt(json[key]);
          }

          speed = (target - begin) * 0.08;
          speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

          if (key === 'opacity') {
            eleObj.style.opacity = (begin + speed) / 100;
          } else {
            eleObj.style[key] = begin + speed + 'px';
          }


          if (begin !== target) {
            flag = false;
          }
        }
      }

      if (flag) {
        clearInterval(eleObj.timer);

        // 回调函数 开启动画
        fn && fn();
      }

    }, 20)
  }

}

export default tools;
