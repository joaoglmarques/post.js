const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Simulando um "banco de dados"
let books = [
    { id: 1, title: 'livro 1' },
    { id: 2, title: 'livro 2' },
    { id: 3, title: 'livro 3' }
];

// Rota para o método PUT
app.put('/update-book/:id', (req, res) => {
    const bookId = parseInt(req.parans.id);
    const newtitle = req.body.title;

    const bookToUpdate = books.find(book => book.Id === bookId);

    if (bookToUpdate) {
        bookToUpdate.title = newtitle;
        res.json(bookToUpdate);
     }  else {
        res.status(404).send('Livro não encontrado');
         }
    });

    app.listen(port, () => {
        console.log('Servidor rodando em http://localhost:${port}');
    });
