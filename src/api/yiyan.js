import request from "@/utils/request";

// B站
export function getYiYan() {
  return request({
    method: "get",
    url: "/yiyan/?c=d&c=j&c=k&c=i&c=f",
  });
}