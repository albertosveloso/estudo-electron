//o app controla o ciclo de vida da aplicacao
// BrowserWindow é o modulo para criacao de janelas
const { app, BrowserWindow } = require('electron'); // importante apenas submodulo app do electron

app.on('ready', () =>{
  console.log('Aplicação iniciada');
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400
  });

  mainWindow.loadURL('http://www.alura.com.br');

});
