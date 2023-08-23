
const Client = require('pg').Client;
const cliente = new Client({
    user: "postgres",
    password: "postgres123",
    host: "localhost",
    port: 5432,
    database: "Produtos"
})

cliente.connect();
cliente.query("SELECT * FROM produtos")
.then((result) => {
    const resultado = result.rows;
    console.table(resultado);
})
.finally(() => cliente.end())