const jsonfile = require('jsonfile-promised');
const fs = require('fs'); // biblioteca do node para verificar arquivos

module.exports = {
  salvaDados(curso, tempoEstudado){

      let arquivoDoCurso = __dirname + '/data/' + curso + '.json';

      if(fs.existsSync(arquivoDoCurso)){
        //se exister somente salvar

      }else{
        //criar e salvar
        this.criaArquivoDeCurso(arquivoDoCurso, {})
        .then(()=>{
            //salvar dados
        })
      }
  },
  criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
    return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
        .then(()=>{
          console.log("Arquivo criado");
        }).catch((err)=>{
          console.log(err);
        });
  }
}
