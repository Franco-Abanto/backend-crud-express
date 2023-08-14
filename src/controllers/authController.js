const { Router } = require("express");
const router = Router();
const connection = require("../database");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM tb_usuarios WHERE username = ? AND password = ?";
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error al realizar la consulta:", error);
      res.status(500).json({ message: "Error en el servidor" });
    } else {
      if (results.length > 0) {
        const token = jwt.sign({ username: username }, config.secret, {
          expiresIn: 60 * 60 * 24,
        });
        res.status(200).json({ auth: true, token });
      } else {
        res.status(401).json({ auth: true, token: null });
      }
    }
  });
});

module.exports = router;
