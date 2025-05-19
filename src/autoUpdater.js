import { dialog } from "electron";
// const { autoUpdater } = require('electron');

const { server } = process.env;

export default (app, autoUpdater) => {
  const feed = `${server}/${process.platform}/${app.getVersion()}`;
  // console.log(`Current version: ${version}`);

  //设置自动更新源
  autoUpdater.setFeedURL(feed);
  //检查是否又更新
  autoUpdater.checkForUpdates();

  autoUpdater.on("checking-for-update", () => {
    console.log("checking-for-update");
  });

  autoUpdater.on("update-available", () => {
    console.log("update-available");
  });

  autoUpdater.on("update-not-available", () => {
    console.log("update-not-available");
  });

  autoUpdater.on(
    "update-downloaded",
    (event, releaseNotes, releaseName, updateURL) => {
      console.log("update-downloaded", {
        event,
        releaseNotes,
        releaseName,
        updateURL,
      });
    }
  );

  autoUpdater.on("error", (error) => {
    console.log("error", { error });
  });
};
