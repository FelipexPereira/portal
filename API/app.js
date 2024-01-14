const express = require("express");

const cors = require("cors"); // Importe o pacote cors

const app = express();

app.use(express.json())

app.use(cors())

//const db = require("./db/models")

const users = require("./controllers/users");

const products = require("./controllers/products");

const login = require('./controllers/login')

app.use('/api/', users);

app.use('/api/', products)

app.use('/api/', login)

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});