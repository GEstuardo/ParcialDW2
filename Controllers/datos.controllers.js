const Datos = require("../models/parcial2.model");

//Ejemplo simple sin validacion y sanitizacion
exports.test = function (req, res) {
  res.send("Saludos desde el controlador de prueba!");
};

//consulta
exports.parcial2_details = function (req, res) {
  parcial2.findById(req.params.id, function (err, parcial2) {
    if (err) return next(err);
    res.send(parcial2);
  });
};

//actualizacion de datos
exports.parcial2_update = function (req, res) {
  parcial2.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
    err,
    parcial2
  ) {
    if (err) return next(err);
    res.status(201).send("Datos Actualizados.");
    res.status(404).send("Datos No Actualizados.");
  });
};

//funcion para eliminar 
//localhost:1234/parcial2/PARCIAL2_ID/delete’
exports.parcial2_delete = function (req, res) {
  parcial2.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.status(201).send("Eliminado Exitósamente!");
    res.status(404).send("Datos no eliminados.");
  });
};

//funcion para crear los datos
exports.parcial2_create = function (req, res) {
  //instanciamos el objeto parcial2
  let parcial2 = new parcial2({
    dpi: req.body.dpi,
    nit: req.body.nit,
    name1: req.body.name,
    name2: req.body.name2,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    nac: req.body.nac,
    name1: req.body.name1,
    apellido3: req.body.apellido3,
    nominal: req.body.nominal,
    funcional: req.body.funcional,
    area: req.body.area,
    email: req.body.email,
    email2: req.body.email2,
    telefono1: req.body.telefono1,
    telefono2: req.body.telefono2,
  });

  //invocamos el metodo save de mongoose.
  parcial2.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).send("Dato creado con éxito");
    res.status(404).send("El Dato no pudo ser creado.");
  });
};
