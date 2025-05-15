import { join } from "node:path";
import fs from "node:fs";
import ini from "ini";
import { ipcMain } from "electron"; 

const cwd = process.cwd();
const filePath = join(cwd, "config/app.properties");

class ConfigHandle {
    
  // 读取配置
  getConfig(_) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", function (err, dataStr) {
        if (err) {
          return reject(err.message);
        }
        resolve(ini.parse(dataStr));
      });
    });
  }

  //设置配置
  setConfig(_, config) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", function (err, dataStr) {
        if (err) {
          return reject(err.message);
        }
        const origin = ini.parse(dataStr.toString());
        fs.writeFile(
          filePath,
          ini.stringify(Object.assign(origin, config)),
          function (err) {
            if (err) {
              return reject(err.message);
            }
            resolve("success");
          }
        );
      });
    });
  }

  // 匿名函数
  register() {
    ipcMain.handle("get-config", this.setConfig.bind(this));
    ipcMain.handle("set-config", this.setConfig.bind(this));
  }
}

export default new ConfigHandle();
