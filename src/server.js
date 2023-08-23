
const express = require('express');
const routes = require('./todos.routes');
const db = require('../db');
const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    return res.status(200).json({ message: 'Up' });
})

app.listen(3333, () => console.log("Server na porta 3333"));