
// Import das bibliotecas para criar uma API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')
const { request } = require('http')

// Inicializando o express atraves do objeto app 
const app = express()

// Import do arquivo de funcoes
const alunos = require('./modulo/funcoes')

app.use((request, response, next)=>{

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors()) 

    next()
})

//EndPoint
app.get('/v1/lion-school/cursos', cors(), async function(request,response){
   
    let informacoes = alunos.getDadosCursos()

    if(informacoes){
    response.status(200) 
    response.json(informacoes)

    }else{
        response.status(404) 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/lion-school/alunos', cors(), async function(request,response){
   
    let informacoes = alunos.getDadosAlunos()

    if(informacoes){
    response.status(200) 
    response.json(informacoes)

    }else{
        response.status(404) 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/lion-school/alunos/filtro/', cors(), async function(request,response){
    let nomeDoCurso = request.query.nome
    let status1 = request.query.s1
    let status2 = request.query.s2
    let ano = request.query.ano
    let informacoes = alunos.getStatusFiltro(status1,status2,nomeDoCurso,ano)
    console.log(status1)
    console.log(status2)
    console.log(nomeDoCurso)
    console.log(ano)

    if(informacoes){
    response.status(200) 
    response.json(informacoes)

    }else{
        response.status(404) 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})


app.get('/v1/lion-school/alunos/:matriculaAluno', cors(), async function(request,response){
    let matriculaAluno = request.params.matriculaAluno 
    let informacoes = alunos.getInformacoesAluno(matriculaAluno)

    if(informacoes){
    response.status(200) 
    response.json(informacoes)

    }else{
        response.status(404) 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/lion-school/alunos/cursos/:ds', cors(), async function(request,response){
    let curso = request.params.ds
    let informacoes = alunos.getAlunosECursos('ds')

    if(informacoes){
    response.status(200) 
    response.json(informacoes)

    }else{
        response.status(404) 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get(' ')

app.listen('8080', function(){
    console.log('API aguardando requisicoes ...')
})
