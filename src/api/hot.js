import request from "@/utils/request";

// BilibiliHot
export function BilibiliHot() {
  return request({
    method: "get",
    url: "bilibili?cache=true",
  });
}


// weiBoHot
export function weiBoHot() {
  return request({
    method: "get",
    url: "weibo?cache=true",
  });
}


// BilibiliHot
export function douYinHot() {
  return request({
    method: "get",
    url: "douyin?cache=true",
  });
}