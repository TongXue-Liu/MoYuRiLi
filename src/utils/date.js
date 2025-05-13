import moment from "moment";

//时间处理
export function dateFormat(timestamp) {
  return timestamp === null || timestamp === ""
    ? ""
    : moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
}

//获取当前时间
export function getCurrentDate() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}
