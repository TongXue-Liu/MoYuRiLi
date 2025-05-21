// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, shell, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  openExternal: (url) => shell.openExternal(url),
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
