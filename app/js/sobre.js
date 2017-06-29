const { ipcRenderer, shell } = require('electron');
const process = require('process'); //módulo do node que tem acesso a versão do node, versao do electron etc...

let linkFechar = document.querySelector("#link-fechar");
let linkTwitter = document.querySelector('#link-twitter');
let versaoElectron = document.querySelector('#versao-electron');

//Informativo da versão do electron dinâmica na página sobre
window.onload = function(){
  versaoElectron.textContent = process.versions.electron;
};

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre');
});

//Abrir browser externo com link
linkTwitter.addEventListener('click', function () {
    shell.openExternal("https://github.com/albertosveloso");
});
