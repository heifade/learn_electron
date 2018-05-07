const { app, BrowserWindow } = require("electron");
const url = require('url');
const path = require('path');

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height:500});
  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
  }))
});