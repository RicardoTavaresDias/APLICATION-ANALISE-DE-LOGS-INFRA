const { app, BrowserWindow } = require("electron")

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 920,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    },

    autoHideMenuBar: true,
    //frame: false
  })

  mainWindow.loadFile("index.html")
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})