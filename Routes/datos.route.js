//importamos express
const express = require("express");
// funcion de enrutar de express
const router = express.Router();

//importamos el controlador de datos
const parcial2_controller = require("../controllers/datos.controller");

//definicion de rutas

// prueba de ruta test
//http://localhost:3000/parcial2/test
router.get("/test", parcial2_controller.test);

//definir la ruta para crear un registro
//http://localhost:3000/parcial2/create
router.post("/create", parcial2_controller.parcial2_create);

//definimos una consulta por id
//http://localhost:3000/parcial2/5f6a7107459ba247044bf90c
router.get("/:id", parcial2_controller.parcial2_details);

//actualizacion
//http://localhost:3000/parcial2/5f6a7107459ba247044bf90c/update
router.put("/:id/update", parcial2_controller.parcial2_update);

//eliminar un dato
//http://localhost:3000/parcial2/5f6a7107459ba247044bf90c/delete
router.delete("/:id/delete", parcial2_controller.parcial2_delete);

module.exports = router;
