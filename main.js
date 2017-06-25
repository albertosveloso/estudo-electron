//o app controla o ciclo de vida da aplicacao
// BrowserWindow é o modulo para criacao de janelas
const { app, BrowserWindow } = require('electron'); // importante apenas submodulo app do electron

app.on('ready', () =>{
  console.log('Aplicação iniciada');
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

//Fechando aplicação de modo amigável para o sistema operacional, evento que escuta fechamento
//de todas janelas do aplicativo
app.on('window-all-closed', () => {
  app.quit();
});
