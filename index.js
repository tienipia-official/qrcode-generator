const { app, BrowserWindow, Menu } = require('electron');

Menu.setApplicationMenu(false); 

let browserWindow;

app.on('ready', () => {
  browserWindow = new BrowserWindow({
    width: 1280,
    height: 960
  });
  console.log(process.env.NODE_ENV);
  browserWindow.loadFile('index.html'); 
});
 