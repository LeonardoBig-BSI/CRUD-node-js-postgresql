
const express = require('express');
const routes = express.Router();

const allProdutos = [{ 
    name: "produto 1",
    status: false,
}];

// Create
routes.post("/cadastrar", (req, res) => {
    
    const { name } = req.body;
    allProdutos.push({ name, status: false })

    return res.status(201).json(allProdutos);
});

// Read
routes.get("/obter", (req, res) => {

    return res.status(200).json(allProdutos);
})

module.exports = routes;