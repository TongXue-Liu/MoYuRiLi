import request from "@/utils/request/yiYan";

export function getYiYan() {
  return request({
    method: "get",
    url: "?c=d&c=j&c=k&c=i&c=f",
  });
}
