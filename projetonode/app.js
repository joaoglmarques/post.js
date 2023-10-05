// Importando o Módulo do Express
const express = require('express');
 
// Criando um objeto do Express
const app = express();
 
// resgatando os dados da requisição
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})

 
// Numero da Porta
const PORT = process.env.PORT ||5002;
 
// Executar o Servicor Node
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
  
  app.get('/clientes', (req, res) => {
    res.send('clientes: '
        + 'kauan henrique')
    res.end()
})


app.get('/usuarios', (req, res) => {
    res.send('usuarios: '
        + 'kaue trajano')
    res.end()
})

app.get('/melhoresamigos', (req, res) => {
    res.send('melhoresamigos: '
        + 'Clara,marcos,gerda')
    res.end()
})

app.get('/miamor', (req, res) => {
    res.send('miamor: '
        + 'Wescley renan')
    res.end()
})

app.get('/diretor', (req, res) => {
    res.send('diretor: '
        + 'henryy')
    res.end()
})

