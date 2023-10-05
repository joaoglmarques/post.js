const express = require('express');
const app = express();
const port = 3000;

// Simulando um "banco de dados"
let books = [
    {id :1, title: 'livro 1'},
    {id :2, title: 'livro 2'},
    {id :3, title: 'livro 3'}
];

// Rota para o método DELETE
app.delete('/delete-book/:Id', (req, res) => {
    const bookId = parseInt(req.parans.id);

    const indexToRemove = books.findIndex(book => book.Id ===  bookId);
    
    if (indexToRemove !== -1) {
        const removedbook = books.splice(indexToRemove, 1);
        res.json(removedbook[0]);
        } else {
        res.status(404).send('Livro não encontrado')
    }
}