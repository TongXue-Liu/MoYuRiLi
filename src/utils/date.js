import moment from "moment";

//时间处理
export function dateFormat(timestamp) {
  return timestamp == null || timestamp == ""
    ? ""
    : moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
}
