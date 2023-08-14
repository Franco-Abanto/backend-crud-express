const { Router } = require("express");
const router = Router();
const connection = require("../database");
const verifyToken = require("./verifyToken");

router.get("/listarEntidades", verifyToken, (req, res, next) => {
  const procedureName = "listar_entidades";
  const query = `CALL ${procedureName}();`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al llamar al procedimiento almacenado:", error);
      res.status(500).json({ message: "Error en el servidor" });
    } else {
      if (results[0].length > 0) {
        res.json(results[0]);
      } else {
        res.json({ message: "No hay datos" });
      }
    }
  });
});

router.post("/crearEntidad", verifyToken, (req, res, next) => {
  const {
    id_entidad,
    id_tipo_documento,
    nro_documento,
    razon_social,
    nombre_comercial,
    id_tipo_contribuyente,
    direccion,
    telefono,
  } = req.body;

  const spName = "crear_entidad";
  const values = [
    id_entidad,
    id_tipo_documento,
    nro_documento,
    razon_social,
    nombre_comercial,
    id_tipo_contribuyente,
    direccion,
    telefono,
  ];

  connection.query(
    `CALL ${spName}(?, ?, ?, ?, ?, ?, ?, ?)`,
    values,
    (error, results) => {
      if (error) {
        console.error("Error al crear entidad:", error);
        res.status(500).json({ message: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Entidad creada correctamente" });
      }
    }
  );
});

//Listar para los select del formulario

router.get("/listarTipoContribuyente", verifyToken, (req, res, next) => {
  const procedureName = "listar_tipo_contribuyente";
  const query = `CALL ${procedureName}();`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al llamar al procedimiento almacenado:", error);
      res.status(500).json({ message: "Error en el servidor" });
    } else {
      if (results[0].length > 0) {
        res.json(results[0]);
      } else {
        res.json({ message: "No hay datos" });
      }
    }
  });
});

router.get("/listarTipoDocumento", verifyToken, (req, res, next) => {
  const procedureName = "listar_tipo_documento";
  const query = `CALL ${procedureName}();`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al llamar al procedimiento almacenado:", error);
      res.status(500).json({ message: "Error en el servidor" });
    } else {
      if (results[0].length > 0) {
        res.json(results[0]);
      } else {
        res.json({ message: "No hay datos" });
      }
    }
  });
});

module.exports = router;
