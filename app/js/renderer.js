const { ipcRenderer } = require('electron');
const timer = require('./timer'); //usar meu arquivo timer.js como se fosse um  módulo do node
const data = require('../../data');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');
let curso = document.querySelector('.curso');

window.onload = () => {

  data.pegaDados(curso.textContent)
    .then((dados)=>{
      tempo.textContent = dados.tempo;
    })
}

linkSobre.addEventListener("click", function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener("click", function(){

    if(play){
      timer.parar(curso.textContent);
      play = false;
    }else{
      timer.iniciar(tempo);
      play = true;
    }

    imgs = imgs.reverse(); //invertendo array
    botaoPlay.src = imgs[0];
});
