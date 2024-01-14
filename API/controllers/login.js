const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const db = require("./../db/models");

router.post("/login", async (req, res) => {
  const { login, password } = req.body;

  try {
    const result = await db.sequelize.query("CALL Login(:login, :password)", {
      replacements: { login, password },
    });

    if (result) {
      //Arrumar o retorno da api (Usuario nao encontrado)
        const userId = result[0].login;

        const token = jwt.sign({ userId }, 'seu_segredo', { expiresIn: '1h' });
  
        res.status(200).json({
          status: true,
          user: login,
          message: "201: Usuário encontrado com sucesso",
          token,
        });
      } else {
        console.log("Erro: Usuário não encontrado");
        return res.status(401).json({
          status: false,
          message: "Erro: Usuário não encontrado",
        });
      }
  
    } catch (error) {
      console.log("Erro interno no servidor", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
      });
    }
});

module.exports = router;
