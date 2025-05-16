import { app, BrowserWindow, Menu, nativeImage, Tray } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";
//自动启动
import { SetupAutoLaunch } from "./utils/auto-launch";
//配置
import configHandler from "./handler/ConfigHandle";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

let mainWindow;
let tray;

//create tray window Icon
const createTrayMenu = async () => {
  let iconPath;
  if (process.env.NODE_ENV === "development") {
    // 开发环境
    iconPath = path.join(app.getAppPath(), "/resources", "/icons/icon.ico");
  } else {
    // 正式环境
    iconPath = path.join(path.dirname(app.getPath("exe")), "/resources", "/icons/icon.ico");
  }
  tray = new Tray(iconPath);

  //读取配置
  const config = await configHandler.getConfig();
  //build Tray Menu Item
  let TrayMenu = Menu.buildFromTemplate([
    { label: "摸鱼日历", type: "normal" },
    {
      label: "更多",
      submenu: [
        {
          label: "开机自启",
          type: "checkbox",
          checked: config.general?.autoLaunch === true,
          click: async (menuItem) => {
            //保存新的配置
            await configHandler.setConfig(null, {
              general: {
                autoLaunch: menuItem.checked,
              },
              //
            });
            //设置开机自启
            SetupAutoLaunch(menuItem.checked);
          },
        },
      ],
    },
    { label: "", type: "separator" },
    {
      label: "退出",
      type: "normal",
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip("摸鱼日历-Liu");
  // tray.setTitle("摸鱼日历-Liu");
  tray.setContextMenu(TrayMenu);
};

//create new Window
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 990,
    height: 530,
    // titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true, // 必须开启
      nodeIntegration: true, // 必须关闭
    },
  });

  mainWindow.resizable = false;
  mainWindow.menuBarVisible = false;

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  //set the program auto launch
  createWindow();
  //Create program Tray;
  createTrayMenu();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
// Global Register
configHandler.register();
//set the program auto launch
