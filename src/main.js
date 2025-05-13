import { app, BrowserWindow, Menu, nativeImage, Tray } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";
import { SetupAutoLaunch } from "./utils/auto-launch";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

let mainWindow;
let tray;

//create new Window
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 990,
    height: 530,
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
  mainWindow.webContents.openDevTools();

  // tray;
  createTrayMenu();
};

//create tray window Icon
const createTrayMenu = () => {
  const icon = nativeImage.createFromPath("icon-.png");
  tray = new Tray(icon);

  //build Tray Menu Item
  let TrayMenu = Menu.buildFromTemplate([
    { label: "摸鱼日历", type: "normal" },
    {
      label: "更多",
      submenu: [{ label: "开机自启", type: "radio", checked: false }],
    },
    { label: "", type: "separator" },
    { label: "退出", type: "normal" },
  ]);
  tray.setContextMenu(TrayMenu);

  tray.setToolTip("摸鱼日历-Liu");
  tray.setTitle("摸鱼日历-Liu");
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//set the program auto launch
SetupAutoLaunch(false);

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
