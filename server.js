const express = require('express');
const cors = require('cors');
const mocks = require('./mocks');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/books', (req, res) => {
    res.send({ books: mocks().books });
});

app.get('/api/books/:bookId', (req, res) => {
    res.send(mocks().getBook(req.params.bookId));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});