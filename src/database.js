const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "P@$$w0rd",
  database: "crud_entidades",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

module.exports = connection;
