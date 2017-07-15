const moment = require('moment'); //biblioteca especialista em trabalhar com data, horas etc...

let segundos;

//exportar objeto, criação de módulo node.js
module.exports = {
  iniciar(el){
      let tempo = moment.duration(el.textContent);
      segundos = tempo.asSeconds();

     //para cada segundo passar colocar um setinterval para aumentar os segundos
     //necessário utilizar arrow function senão não vamos conseguir utilizar a função segundosParaTempo()
     setInterval(()=>{
       segundos++;
       el.textContent = this.segundosParaTempo(segundos);
     }, 1000);
  },
  segundosParaTempo(segundos){
      //00:00:00
      return moment().startOf('day').seconds(segundos).format("HH:mm:ss"); //retornando objeto em horas
  }
}
