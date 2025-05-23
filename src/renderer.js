/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

window.addEventListener("DOMContentLoaded", () => {
  window.electronAPI.on("update-message", (event, args) => {
    console.log(
      "ipcRenderer,update-message,message:" + JSON.stringify(args.message)
    );
    if ("update-not-available" === args.cmd) {
      console.log("ipcRenderer,update-not-available");
    } else if ("update-available" === args.cmd) {
      console.log("ipcRenderer,update-available");
    } else if ("update-downloaded" === args.cmd) {
      console.log("ipcRenderer,update-downloaded");
    } else if ("error" === args.cmd) {
      console.log("ipcRenderer,error" + args.message);
    }else{
      console.log(args);
    }
  });

  setTimeout(() => {
    window.electronAPI.send("checkForUpdate");
  }, 3000);
});

import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
