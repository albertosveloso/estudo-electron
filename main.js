//o app controla o ciclo de vida da aplicacao
// BrowserWindow é o modulo para criacao de janelas
const { app, BrowserWindow, ipcMain } = require('electron'); // importante apenas submodulo app do electron

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

//ipcMain escutando o evento que foi enviado pelo processo de renderer
let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 220,
            alwaysOnTop: true,
            frame: false
        });
        sobreWindow.on('closed', () => {
           sobreWindow = null;
       })
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
});

//Escutando o curso parado e parametros
ipcMain.on('curso-parado', (event, curso, tempoEstudado)=>{
  console.log(`O curso ${curso} foi estudado por ${tempoEstudado}`);
});
