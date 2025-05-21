//update.js
import { app, ipcMain, dialog, autoUpdater } from "electron";

export class UpdateManager {
  static instance = new UpdateManager();

  static getInstance() {
    return this.instance;
  }

  baseUrl = process.env.AUTO_UPDATE_SERVER || "http://192.168.191.129:8080";

  mainWindow = null;

  sendUpdateMessage(text) {
    this.mainWindow?.webContents.send("update-message", text);
  }

  init(window) {
    console.log("ipcMain-update,init");
    this.mainWindow = window;
    var platform = "";
    var arch = "";

    if (process.platform === "darwin") {
      platform = "osx";
      if (process.arch === "arm64") {
        arch = "arm64";
      } else {
        arch = "64";
      }
    } else if (process.platform === "win32") {
      platform = "windows";
      if (process.arch === "x64") {
        arch = "64";
      } else {
        arch = "32";
      }
    } else if (process.platform === "linux") {
      platform = "linux";
      if (process.arch === "x64" || process.arch === "x86_64") {
        arch = "64";
      } else {
        arch = "32";
      }
    }

    var feedUrl =
      this.baseUrl +
      "/update/" +
      platform +
      "_" +
      arch +
      "/" +
      app.getVersion() +
      "/stable";
    console.log(feedUrl);

    autoUpdater.setFeedURL({ url: feedUrl });

    autoUpdater.on("error", (error) => {
      console.log("ipcMain-update,error:" + error);
      this.sendUpdateMessage({ cmd: "error", message: error });
    });

    autoUpdater.on("update-not-available", () => {
      console.log("ipcMain-update,update-not-available");
      this.sendUpdateMessage({
        cmd: "update-not-available",
        message: "has not found any updates",
      });
    });

    autoUpdater.on("update-available", () => {
      console.log("ipcMain-update,update-available");
      this.sendUpdateMessage({
        cmd: "update-available",
        message: "find new version",
      });
    });

    autoUpdater.on("update-downloaded", (event, releaseNotes, releaseName) => {
      console.log("ipcMain-update,update-downloaded:" + event);
      this.sendUpdateMessage({
        cmd: "update-downloaded",
        message: {
          releaseNotes: releaseNotes,
          releaseName: releaseName,
        },
      });

      const dialogOpts = {
        type: "info",
        buttons: ["确定", "稍后"],
        title: "版本更新",
        message: "发现新版本:" + releaseName,
        detail: "新版本已经下载完成，是否现在重启?",
      };
      dialog.showMessageBox(dialogOpts).then((returnValue) => {
        if (returnValue.response === 0) {
          autoUpdater.quitAndInstall();
        }
      });
    });

    ipcMain.on("checkForUpdate", (event, args) => {
      console.log("ipcMain-update,checkForUpdate");
      autoUpdater.checkForUpdates();
    });
  }
}
