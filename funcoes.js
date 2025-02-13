var DadosAlunos = require('./modulo/alunos');
var alunos = DadosAlunos.alunos

var DadosCursos = require('./modulo/cursos')
var cursos = DadosCursos.cursos


const getDadosAlunos = function(informacaoDosAlunos){
    let informacoes = {aluno: alunos}

    return informacoes
    
}

//console.log(getDadosAlunos())//

const getDadosCursos = function(informacaoDoCursos){
    let informacoes = {curso: cursos}

    return informacoes
    
}

//console.log(getDadosCursos())//

const getInformacoesAluno = function(matriculaAluno){
    let entrada = String(matriculaAluno).toUpperCase()
    let informacoes = {matricula: '', foto: '', nome: '', sexo: '', curso: ''}

    alunos.forEach(function(dados){
        if(String(dados.matricula).toUpperCase() == entrada){
            informacoes.matricula = dados.matricula
            informacoes.foto = dados.foto
            informacoes.nome = dados.nome
            informacoes.sexo = dados.sexo
            informacoes.curso = dados.curso
        }
    })

    return informacoes
    
}

//console.log(getInformacoesAluno('20151001012'))//

const getAlunosECursos = function(curso){
    let entrada = String(curso).toUpperCase()
    let informacoes = {cursos: entrada, nome: []}

    // forEach dentro do outro 
    // Entra dados do aluno
    alunos.forEach(function(dados){

        // Entra informacao do curso e os alunos que estao cursando 
        dados.curso.forEach(function(informacao){
            if(String(informacao.sigla).toUpperCase() == entrada){
                informacoes.nome.push(dados)
            }
        })
    })

    return informacoes
    
}

//console.log(getAlunosECursos('RDS'))//

const getStatusAluno = function(status){
    let entrada = String(status).toUpperCase()
    let lista = []
    

    alunos.forEach(function(dados){
        let informacoes = {status: '',  nome: '', curso: ''}
        if(String(dados.status).toUpperCase() == entrada){
            informacoes.status = dados.status
            informacoes.nome = dados.nome
            informacoes.curso = dados.curso
            lista.push(informacoes) // adiciona na lista e vai para o proximo 
        }
        
    })    

    return lista
    
}

//console.log(getStatusAluno('Finalizado'))//
