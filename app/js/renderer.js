const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');

console.log(linkSobre);

linkSobre.addEventListener("click", function(){
    ipcRenderer.send('abrir-janela-sobre');
});
