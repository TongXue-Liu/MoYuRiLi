import AutoLaunch from "auto-launch";
import { app } from "electron";
import log from "electron-log/main";

/**
 * 设置应用开机自启动。
 * @param enable 是否启用自启动，默认为true。
 */
export function SetupAutoLaunch(enable = true) {
  //构建对象
  const autoLauncher = new AutoLaunch({
    name: app.name,
    path: process.execPath,
  });

  //判断是否自启动
  if (enable) {
    autoLauncher.isEnabled().then((isEnabled) => {
      if (!isEnabled) {
        autoLauncher
          .enable()
          .then(() => log.info("已启用自启动"))
          .catch((err) => log.error("启用自启动失败:", err));
      } else {
        log.info("自启动已经启用");
      }
    });
  } else {
    autoLauncher
      .isEnabled()
      .then((isEnabled) => {
        if (isEnabled) {
          autoLauncher
            .disable()
            .then(() => log.info("已禁用自启动"))
            .catch((err) => log.error("禁用自启动失败:", err));
        } else {
          log.info("自启动已经禁用");
        }
      })
      .catch((err) => log.error("检查自启动状态失败:", err));
  }
}
