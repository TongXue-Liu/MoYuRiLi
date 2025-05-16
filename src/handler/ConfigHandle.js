import { join } from "node:path";
import fs from "node:fs";
import ini from "ini";
import { ipcMain } from "electron";

class ConfigHandle {
  
  cwd = process.cwd();

  filePath =
    process.env.NODE_ENV === "development"
      ? join(this.cwd, "/resources/config/app.properties")
      : join(this.cwd, "/resources/config/app.properties");

  // 读取配置
  getConfig() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, "utf8", (err, dataStr) => {
        if (err) {
          return reject(err.message);
        }
        resolve(ini.parse(dataStr));
      });
    });
  }

  // 设置配置
  setConfig(_, config) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, "utf8", (err, dataStr) => {
        if (err) {
          return reject(err.message);
        }
        const origin = ini.parse(dataStr.toString());
        const mergedConfig = Object.assign(origin, config);
        fs.writeFile(this.filePath, ini.stringify(mergedConfig), (err) => {
          if (err) {
            return reject(err.message);
          }
          resolve("success");
        });
      });
    });
  }

  // 注册 ipcMain 事件
  register() {
    ipcMain.handle("get-config", this.getConfig.bind(this));  // 修正这里
    ipcMain.handle("set-config", this.setConfig.bind(this));
  }
}

export default new ConfigHandle();
