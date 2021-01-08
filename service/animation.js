import tools from "~/service/tools";

// 固定平移
export function move() {
  // 获取元素对象
  let banner = document.getElementById('banner');

  // 定义定时器id
  let intervalId = null, begin = 0, step = 50, target = 600;

  banner.addEventListener('click', (e) => {
    // 清除定时器
    clearInterval(intervalId);

    // 设置定时器
    intervalId = setInterval(() => {

      // 当到达目标时 清除定时器
      if (begin >= target) {
        clearInterval(intervalId);
      }

      // 改变起始值
      begin += step;

      // 修改margin
      banner.firstChild.style.marginLeft = '-' + begin + 'px';

    }, 10)
  })
}

// 线行平移{盒子id 按钮id 步数 目标}
export function linearAnimation(boxId, btnId, step, target) {

  // 获取元素对象
  let banner = tools.ele(boxId)
  // let banner = document.getElementById(boxId);

  // 定义定时器id
  let intervalId = null, begin = 0;
  step = step || 0, target = target || 0;

  // 添加点击事件
  banner.addEventListener('click', (e) => {
    // 清除定时器
    clearInterval(intervalId);

    // 设置定时器
    intervalId = setInterval(() => {

      // 当到达目标时 清除定时器
      if (begin >= target) {
        clearInterval(intervalId);
      }

      // 改变起始值
      begin += step;

      // 修改margin
      banner.firstChild.style.marginLeft = '-' + begin + 'px';

    }, 10)
  })
}


// 缓动动画
export function slowAnimation() {

  let intervalId = null, begin = 0, target = 600;
  let ele = tools.ele('loop');

  ele.addEventListener('click', () => {

    clearInterval(intervalId);

    intervalId = setInterval(() => {
      begin += (target - begin) * 0.2;

      if (Math.round(begin) >= target) {
        begin = target;
        clearInterval(intervalId);
      }
      ele.style.marginLeft = '-' + begin + 'px';
    }, 10)
  })
}

// 轮播
export function loop(loopId, loopTime) {

  // 获取对象
  let banner = tools.ele('banner');
  let loop = tools.ele(loopId);
  let loopContent = loop.children;
  // 左右按钮
  let prevFont = tools.ele('prevFont');
  let nextFont = tools.ele('nextFont');
  // 索引指示器
  let controlBtn = tools.ele('controlBtn');
  // 全局轮播索引
  let num = 0;

  // 第一次获取轮播盒子宽度
  let scrollWidth = loop.offsetWidth;
  loop.style.height = scrollWidth / 3 + 'px'

  // 窗口改变时 获取轮播盒子宽度 自适应高度
  window.addEventListener('resize', () => {
    scrollWidth = loop.offsetWidth;
    loop.style.height = scrollWidth / 3 + 'px';

    // if (num > 0){
    //   loopContent[num-1].style.left = -scrollWidth + 'px';
    // } else {
    //   loopContent[controlBtn.children.length-1].style.left = -scrollWidth + 'px';
    // }

    for (let i = 1; i < loopContent.length; i++) {
      if (num !== i) {
        loopContent[i].style.left = scrollWidth + 'px';
      }
    }
  })

  // 默认轮播div除第一个外全部右移
  for (let i = 1; i < loopContent.length; i++) {
    loopContent[i].style.left = scrollWidth + 'px';
  }

  // 上一张切换
  prevFont.addEventListener('click', () => {
    prev();
  })

  // 下一张切换
  nextFont.addEventListener('click', () => {
    autoPlay();
  })

  // 设定轮播
  let timerId = setInterval(autoPlay, loopTime)

  // 鼠标进入事件
  banner.addEventListener('mouseover', () => {
    clearInterval(timerId);
  })
  // 鼠标移出事件
  banner.addEventListener('mouseout', () => {
    timerId = setInterval(autoPlay, loopTime)
  })

  // 鼠标悬浮切换
  for (let i = 0; i < controlBtn.children.length; i++) {
    let btnLi = controlBtn.children[i];
    ((index) => {
      btnLi.addEventListener('mouseover', () => {
        clearInterval(timerId)

        if (index > num) {
          tools.buffer(loopContent[num], {left: -scrollWidth});
          loopContent[index].style.left = scrollWidth + 'px';
        } else if (index < num) {
          tools.buffer(loopContent[num], {left: scrollWidth});
          loopContent[index].style.left = -scrollWidth + 'px';
        }

        num = index;
        tools.buffer(loopContent[num], {left: 0});
        changeIndex();
      })

      btnLi.addEventListener('mouseout', () => {
        timerId = setInterval(autoPlay, loopTime)
      })

    })(i)
  }


  // 改变指针样式
  function changeIndex() {
    for (let i = 0; i < controlBtn.children.length; i++) {
      controlBtn.children[i].className = 'col';
    }

    controlBtn.children[num].className = 'col current';

  }

  // autoPlay 下一张
  function autoPlay() {
    tools.buffer(loopContent[num], {left: -scrollWidth});

    num++;
    if (num >= loopContent.length) {
      num = 0;
    }

    loopContent[num].style.left = scrollWidth + 'px';
    tools.buffer(loopContent[num], {left: 0});

    changeIndex();

  }

  // 上一张
  function prev() {
    tools.buffer(loopContent[num], {left: scrollWidth});

    num--;
    if (num < 0) {
      num = loopContent.length - 1;
    }

    loopContent[num].style.left = -scrollWidth + 'px';
    tools.buffer(loopContent[num], {left: 0});

    changeIndex();
  }
}

export function loop2(loop2Id, loopTime) {

  let rotation2 = tools.ele('rotation2')
  let loop = tools.ele(loop2Id);

  let prevFont2 = tools.ele('prevFont2');
  let nextFont2 = tools.ele('nextFont2');
  let loopIndex2 = tools.ele('loopIndex2').children;
  let loopArr = loop.children;

  let numIndex = 1;

  changeIndexStyle();

  let timer = setInterval(() => {
    autoPlay2();
  }, loopTime)

  rotation2.addEventListener('mouseover', () => {
    clearInterval(timer);
  })

  rotation2.addEventListener('mouseout', () => {
    timer = setInterval(() => {
      autoPlay2();
    }, loopTime)
  })


  // 上一页
  prevFont2.addEventListener('click', () => {
    let loop2 = tools.ele(loop2Id);

    loop2.insertBefore(loop2.children[loop2.children.length - 1], loop2.children[0]);
    loop2.children[0].style.marginLeft = '-340px';

    tools.buffer(loop2.children[0], {marginLeft: 0}, () => {})

    numIndex--;
    if (numIndex < 0) {
      numIndex = loop2.children.length - 1;
    }

    changeIndexStyle();

  })

  // 下一页
  nextFont2.addEventListener('click', () => {
    autoPlay2();
  })

  function autoPlay2() {

    tools.buffer(loopArr[0], {marginLeft: -340}, () => {
      let loopChild = loopArr[0];
      loopArr[0].remove();
      loop.append(loopChild);
      loopArr[5].style.marginLeft = '';

      numIndex++;
      if (numIndex >= loop.children.length) {
        numIndex = 0;
      }

      changeIndexStyle();
    });

  }

  // loopIndex2.forEach((current, index) => {
  //   ((index) => {
  //     current.addEventListener('mouseover', () => {
  //       if (index > numIndex) {
  //
  //
  //         tools.buffer(loop.children[index], {marginLeft: 0}, () => {
  //         });
  //
  //       } else if (index < numIndex) {
  //
  //       }
  //
  //     })
  //
  //   })(index)
  //
  // })

  function changeIndexStyle() {
    loopIndex2.forEach((currentValue) => {
      currentValue.className = '';
    })

    loopIndex2[numIndex].className = 'currentIndex2'
  }

}
