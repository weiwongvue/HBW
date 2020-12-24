
import axios from 'axios'

console.log(axios)

// const ax = axios.create();

// 表单信息收集
function addUser(user) {
  let ret = /^1[3456789]\d{9}$/;
  if (!ret.test(user.mobile)) {
    alert('请输入正确的手机号');
    return;
  }



  axios.post("/ajjUser/addUser", {
    name: user.name,
    mobile: user.mobile
  }).then(res => {
    console.log(res)
    if (200 == res.data.status) {
      alert('提交成功');
      // user = '';
    } else {
      alert('提交失败 请稍后重试!');
    }
  })
}

export {addUser}
