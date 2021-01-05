// import tools from "~/service/tools";
//
// export function move(){
//
//   // 获取元素对象
//   let banner = document.getElementById('banner');
//   console.log(banner.firstChild)
//
//   // 定义定时器id
//   let intervalId = null, begin = 0, step = 50, target = 600;
//
//   banner.addEventListener('click',(e)=>{
//     // 清除定时器
//     clearInterval(intervalId);
//
//     // 设置定时器
//     intervalId = setInterval(()=>{
//       console.log(1);
//
//       // 当到达目标时 清除定时器
//       if (begin >= target){
//         clearInterval(intervalId);
//       }
//
//         // 改变起始值
//       begin += step;
//
//       // 修改margin
//       banner.firstChild.style.marginLeft = '-' + begin + 'px';
//
//     },10)
//   })
// }
//
// export function linearAnimation(boxId, btnId, step, target){
//
//   // 获取元素对象
//   let banner = tools.ele(boxId)
//   // let banner = document.getElementById(boxId);
//   console.log(banner.firstChild)
//
//   // 定义定时器id
//   let intervalId = null, begin = 0;
//   step = step || 0, target = target || 0;
//
//   // 添加点击事件
//   banner.addEventListener('click',(e)=>{
//     // 清除定时器
//     clearInterval(intervalId);
//
//     // 设置定时器
//     intervalId = setInterval(()=>{
//       console.log(2);
//
//       // 当到达目标时 清除定时器
//       if (begin >= target){
//         clearInterval(intervalId);
//       }
//
//       // 改变起始值
//       begin += step;
//
//       // 修改margin
//       banner.firstChild.style.marginLeft = '-' + begin + 'px';
//
//     },10)
//   })
// }
