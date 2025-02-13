
var DadosAlunos = require('./alunos');
var alunos = DadosAlunos.alunos

var DadosCursos = require('./cursos')
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


const getStatusDaDisciplina = function(curso, status){
    let entrada = String(curso).toUpperCase()
    let informacoes = {cursos: entrada, aluno: []}

    alunos.forEach(function(dados){
        dados.curso.forEach(function(curso){
            if(String(curso.sigla).toUpperCase() == entrada){
                curso.disciplinas.forEach(function(disciplinas){
                    if(String(disciplinas.status).toUpperCase() == String(status).toUpperCase()){
                        informacoes.aluno.push(dados)
                    }
                })
            }
        })
    })
    return informacoes // Vai retornar todos os alunos que tem aprovado (exame ou reprovado) nos seus dados
}
//console.log(getStatusDaDisciplina('DS', 'exame'))//

const getAnoDeConclusao = function(curso,ano){
    let entrada = String(curso).toUpperCase()
    let informacoes = {cursos: entrada, aluno: []}

    alunos.forEach(function(dados){
        dados.curso.forEach(function(curso){
            if(String(curso.sigla).toUpperCase() == entrada){
                if(curso.conclusao == ano){
                    informacoes.aluno.push(dados)
                }
            }
        })
    })

    return informacoes
}
//console.log(getAnoDeConclusao ('ds', '2023'))//


// Função para os três últimos GET, para não rolar conflito com a 3° get já que os end-point são parecidos 
const getStatusFiltro = function(status1, status2, nomeDoCurso, ano){
    let filtro = false 
    if(status1){
        filtro = getStatusAluno(status1)
    }else if(nomeDoCurso && status2 && !ano){
        filtro = getStatusDaDisciplina(nomeDoCurso, status2)
    }else if(ano && nomeDoCurso && !status2){
        filtro = getAnoDeConclusao(nomeDoCurso, ano)
    }
    return filtro
}
// console.log(getStatusFiltro('','ds','aprovado',''))

module.exports = {
    getDadosCursos,
    getDadosAlunos,
    getInformacoesAluno,
    getAlunosECursos,
    getStatusAluno,
    getStatusDaDisciplina,
    getAnoDeConclusao,
    getStatusFiltro
}








