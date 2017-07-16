//o app controla o ciclo de vida da aplicacao
// BrowserWindow é o modulo para criacao de janelas
const { app, BrowserWindow, ipcMain, Tray, Menu} = require('electron'); // importante apenas submodulo app do electron
const data = require('./data');
const templateGenerator = require('./template');

let tray = null; //icones do tray
let mainWindow = null;

app.on('ready', () =>{
  console.log('Aplicação iniciada');
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400
  });

  tray = new Tray(__dirname + '/app/img/icon-tray.png');
  let template = templateGenerator.geraTrayTemplate(mainWindow);
  let trayMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(trayMenu);

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

//Escutando o evento curso parado e parametros e salvando dados em json
ipcMain.on('curso-parado', (event, curso, tempoEstudado)=>{
  console.log(`O curso ${curso} foi estudado por ${tempoEstudado}`);
  data.salvaDados(curso, tempoEstudado);
});

ipcMain.on('curso-adicionado', (event, novoCurso)=>{
  let novoTemplate = templateGenerator.adicionaCursoNoTray(novoCurso, mainWindow);
  let novoTrayMenu = Menu.buildFromTemplate(novoTemplate); //template com novo curso
  tray.setContextMenu(novoTrayMenu); //Novo menu com curso adicionado
});
