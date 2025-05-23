import { ElMessage } from "element-plus";

// 复制链接到剪贴板或打开外链
export function copyUrlHandler(url) {
  if (!url) return;
  if (typeof window !== "undefined" && window?.electronAPI?.openBrowserByUrl) {
    ElMessage.success("准备摸鱼，打开内容中……");
    setTimeout(() => {
      window.electronAPI.openBrowserByUrl(url);
    }, 1000);
  } else {
    console.error("Electron API 不可用");
  }
}
