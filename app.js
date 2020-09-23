const express = require("express"); // Utilizaremos express, aqui lo mandamos llamar
const bodyParser = require("body-parser"); //

// Utilizamos la librería de mongoose
const mongoose = require("mongoose");

//definimos el string de conexion
usuario:conecta
pwd: 123456
let conexion = "mongodb://conecta:123456@localhost:27017/desarrolloweb.parcial2"; //string de conexion
// script para crear usuarios en mongoDB
// correr esto desde mongo
 //db.createUser(
   //{
    // user: "conecta",
     //pwd: "123456",
     //roles: [
      // { role: "readWrite", db: "parcial2" }
    // ]
  // }
//}

//Creamos la conexión con mongo
//opcion 1
//mongoose.connect("mongodb://conecta:123456@localhost:27017/desarrolloweb.parcial2");

//opcion 2
let mongoDB = process.env.MONGODB_URI || conexion;

mongoose.connect(mongoDB); //hace la conexion a mongo db
mongoose.Promise = global.Promise;

//se define y ejecuta la conexion a mongoDB
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));

const parcial2 = require("./routes/datos.route"); // Importa las rutas para los datos
const app = express(); // definimos la app usando express

//definimos el uso para parsear json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//AQUÍ definimos que el punto de entrada para las rutas de datos
//deberá llevar el prefijo de datos
app.use("/datos", datos);
app.use("/datos2", datos);
app.use("/dpi", datos);
app.use("/nit", datos);


//puerto que usaremos por efecto.
let port = 3000;
app.listen(port, () => {
  console.log("Servidor funcionando en el puerto " + port);
});
