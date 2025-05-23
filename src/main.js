import { app, BrowserWindow, ipcMain, Menu, Tray, shell } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";
//自动启动
import { SetupAutoLaunch } from "./utils/auto-launch";
//配置
import configHandler from "./handler/ConfigHandle";
//自动更新
import { UpdateManager } from "./autoUpdater";
//环境检查
import isDev from "electron-is-dev";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

let mainWindow;
let tray;
let iconPath;

//create tray window Icon
const createTrayMenu = async () => {
  if (isDev) {
    // 开发环境
    iconPath = path.join(app.getAppPath(), "/resources", "/icons/icon.ico");
  } else {
    // 正式环境
    iconPath = path.join(
      path.dirname(app.getPath("exe")),
      "/resources",
      "/icons/icon.ico"
    );
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

  //restore the window
  tray.on("click", () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.setSize(990, 530);
      mainWindow.show();
    }
  });
};

//create new Window
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 990,
    height: 530,
    // titleBarStyle: "hidden",
    webPreferences: {
      contextIsolation: true, // 必须开启
      nodeIntegration: false, // 必须关闭
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.resizable = false;
  mainWindow.menuBarVisible = false;
  // console.log(path.join(__dirname, "resources/icons/icon_64.png"));
  // mainWindow.setWindowButtonVisibility()
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

  // minimize the window
  mainWindow.on("minimize", () => {
    mainWindow.hide();
  });

  // Object.defineProperty(app, "isPackaged", {
  //   get() {
  //     return true;
  //   },
  // });

  if (app.isPackaged) {
    UpdateManager.getInstance().init(mainWindow);
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  //set the program auto launch
  createWindow();
  //Create program Tray;
  createTrayMenu();
  //设置application Icon
  mainWindow.setIcon(iconPath);


  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipcMain.on("open-url", (event, url) => {
    if (typeof url === "string") {
      shell.openExternal(url);
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
