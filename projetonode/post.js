const express = require("express");
const app = express();
const port = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//simulando um banco de dados
let books = [
    { id: 1, title: 'livro 1' },
    { id: 2, title: 'livro 2' },
    { id: 3, title: 'livro 3' }
];

//rota para obter todos os livros (metodo GET)
app.get('/books', (req, res) => {
    res.json(books);
});

//rota para adicionar um novo livro (metodo POST)
app.post('/post-example', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json(newBook);
});


//rota para método put
app.put('/update-book/id', (rec, res) => {
    const bookId = parseInt(req.params.id);
    const newTitle = req.body.title;

    const bookToUpdate = books.find(book => book.id === bookId);

    if (bookToUpdate) {
        bookToUpdate.title = newTitle;
        res.json(bookToUpdate);
    } else {
        res.status(404).send('Livro não encontrado');
    }
});

// Rota para o metodo DELETE

app.delete('/delete-book/:id', (req, res) => {

    const bookId = parseInt(req.params.id);

    const indexToRemove = books.findIndex(book => book.id === bookId);

    if (indexToRemove !== -1) {

        const removedBook = books.splice(indexToRemove, 1);
        res.json(removedBook[0]);
    } else {
        res.status(404).send('Livro não encontrado');
    }
});

app.listen(port, () => {
    console.log('Servidor rodando en http://localhost:${port}');
});

// Importando o Módulo do Express
const express = require('express');
const mysql =require('mysql');

// Criando um objeto do Express
const app = express();
const port = process.env.PORT || 5001;
 
const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: 'root',
   database: 'alunos_ninho_t'
});

connection.connect((err) => {
    if(err){
        console.error('Erro ao conectar ao MySQL: ' + err.message);
    } else {
        console.log('Conectado ao MySQL');
    }
});

app.use(express.urlencoded({extended: true }));
app.use(express.json());

//rota metodo get para buscar todos os users
app.get('/api/usuarios', (req, res) => {
    // consultar o banco de dados para buscar todos os usuarios
    const sql = 'SELECT * FROM usuario';

    connection.query(sql, (err, results) => {
        if(err){
            console.error('Erro ao buscar registros: '+ err.message);
            res.status(500).json({ error: 'Erro ao buscar registros'});
        } else {
            res.status(200).json(results);
        }
    });
});

//iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port} `);
});
