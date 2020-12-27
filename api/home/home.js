import request from "~/service/request";

// 表单信息收集
export function addUser(params) {
  return request({
    method: 'post',
    url: '/ajjUser/addUser',
    data: params
  });
}
