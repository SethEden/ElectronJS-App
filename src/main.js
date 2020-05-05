const electron = require('electron');
const { app, BrowserWindow } = require('electron');
import math from './math';

// console.log(math.add(1,2));
math.start();
console.log('Hello Project.');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
