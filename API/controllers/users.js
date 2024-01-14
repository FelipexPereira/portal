const express = require('express');

const router = express.Router();

const db = require("./../db/models")

router.post('/users', async (req, res) => {
    try {
      const dados = req.body;
      const dadosProdutos = await db.Users.create(dados);
  
      return res.status(201).json({
        message: 'Usuario cadastrado com sucesso!',
        dadosProdutos,
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuario:', error);
      return res.status(500).json({
        message: 'Erro: Usuario não cadastrado',
      });
    }
  });
  
  module.exports = router;