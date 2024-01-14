const express = require('express');

const router = express.Router();

const db = require("./../db/models")

router.post("/products", async (req, res) => {
    
    var dados = req.body;

    await db.Products.create(dados).then((dadosProdutos) => {
        return res.json({
            message: "Item cadastrado com sucesso!",
            dadosProdutos
        })
    }).catch(() => {
        return res.json({
            mensage: "Erro: Produto não cadastrado"
        })
    })
})

module.exports = router