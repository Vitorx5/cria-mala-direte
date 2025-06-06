require('electron-reload')(__dirname, {
  // Você pode customizar aqui quais arquivos/diretórios monitorar:
  // watch: ['src', 'index.html'],
  electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

});

