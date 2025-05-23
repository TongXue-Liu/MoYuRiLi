// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  openBrowserByUrl: (url) => {
    ipcRenderer.send("open-url", url); // 🔁 改为通过 ipc 发送
  },
  send: (channel, data) => {
    // 只允许安全的 channel
    const validChannels = ["checkForUpdate"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, callback) => {
    const validChannels = ["update-message"];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, args) => callback(event, args));
    }
  },
});
