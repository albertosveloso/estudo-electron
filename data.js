const jsonfile = require('jsonfile-promised');
const fs = require('fs'); // biblioteca do node para verificar arquivos

module.exports = {
  salvaDados(curso, tempoEstudado){

      let arquivoDoCurso = __dirname + '/data/' + curso + '.json';

      if(fs.existsSync(arquivoDoCurso)){
        this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
      }else{
        //criar e salvar
        this.criaArquivoDeCurso(arquivoDoCurso, {})
        .then(()=>{
            this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
        })
      }
  },
  adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado){
    let dados = {
      ultimoEstudo: new Date().toString(),
      tempo: tempoEstudado
    }

    jsonfile.writeFile(arquivoDoCurso, dados, {spaces: 2}) //spaces:2 deixa o visual melhor do json
        .then(()=>{
          console.log('tempo salvo com sucesso');;
        }).catch((err)=>{
          console.log(err);
        })

  },
  criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
    return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
        .then(()=>{
          console.log("Arquivo criado");
        }).catch((err)=>{
          console.log(err);
        });
  },
  pegaDados(nomeCurso){
    let arquivoDoCurso = __dirname + '/data/' + nomeCurso + '.json';
    return jsonfile.readFile(arquivoDoCurso);
  },
  pegaNomeDosCursos(){
    let arquivos = fs.readdirSync(__dirname + '/data/');
    let cursos = arquivos.map((arquivo)=>{
      return arquivo.substr(0, arquivo.lastIndexOf('.')); //removendo a parte escrita .json do nome do arquivo - usando map
    });
    return cursos;
  }
}
