import request from "~/service/request";

// 获取新闻列表
export function getNewsList(params) {
  return request({
    method: 'post',
    url: '/ajjNews/getNewsList',
    data: params
  });
}

// 分页方法
export function firstPage(pageNum) {
  if (pageNum !== 1) {
    pageNum = 1;
  }
  return pageNum;
}

export function lastPage(pageNum,pages) {
  return pageNum!==pages?pageNum=pages:pageNum;
}

export function prevPage(pageNum) {
  if (pageNum > 1) {
    pageNum -= 1;
  }
  return pageNum;
}

export function nextPage(pageNum,pages) {
  if (pageNum < pages) {
    pageNum += 1;
  }
  return pageNum;
}

// 跳转到指定页数
export function goToPage(pageNum,pages,goTo) {
  if (goTo !== '' && goTo !== pageNum && goTo <= pages) {
    pageNum = goTo;
  }
  return pageNum;
}

// 编码跳转
export function toPage(pageNum) {
  return pageNum;
}
