import request from "@/utils/request/global";

// B站
export function getBilibiliHot() {
  return request({
    method: "get",
    url: "bilibili?cache=true",
  });
}

// 微博
export function getWeiBoHot() {
  return request({
    method: "get",
    url: "weibo?cache=true",
  });
}

// 抖音
export function getDouYinHot() {
  return request({
    method: "get",
    url: "douyin?cache=true",
  });
}

// 头条A
export function getTouTiaoHot() {
  return request({
    method: "get",
    url: "toutiao?cache=true",
  });
}

// 百度贴吧
export function getTieBaHot() {
  return request({
    method: "get",
    url: "tieba?cache=true",
  });
}

// 元神
export function getYuanShenHot() {
  return request({
    method: "get",
    url: "genshin?cache=true",
  });
}


// 掘金
export function getJueJinHot() {
  return request({
    method: "get",
    url: "juejin?cache=true",
  });
}

// LoL
export function getLoLHot() {
  return request({
    method: "get",
    url: "lol?cache=true",
  });
}

// hellogithub
export function getHelloGitHubHot() {
  return request({
    method: "get",
    url: "hellogithub?cache=true",
  });
}



// ithome
export function getITHomeHot() {
  return request({
    method: "get",
    url: "ithome?cache=true",
  });
}


