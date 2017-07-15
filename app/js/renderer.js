const { ipcRenderer } = require('electron');
const timer = require('./timer'); //usar meu arquivo timer.js como se fosse um  módulo do node

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');

linkSobre.addEventListener("click", function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener("click", function(){

    if(play){
      timer.parar();
      play = false;
    }else{
      timer.iniciar(tempo);
      play = true;
    }

    imgs = imgs.reverse(); //invertendo array
    botaoPlay.src = imgs[0];
});
