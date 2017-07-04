const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');

console.log(linkSobre);

linkSobre.addEventListener("click", function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let botaoPlay = document.querySelector('.botao-play');

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
botaoPlay.addEventListener("click", function(){
    imgs = imgs.reverse(); //invertendo array
    botaoPlay.src = imgs[0];
});