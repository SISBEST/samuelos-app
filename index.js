const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    fullscreenWindowTitle: 'SamuelOS',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
