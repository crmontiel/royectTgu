const db = require('../../configuration/ps_connection');

exports.actualizarPass = async function(req, res, next) {
  let actualizacion = await db.func("seguridad.sp_registrar_cambio_pass", [req.body.pass1, req.body.pass2, req.body.user]).catch(error => {
    res.send({
      msg: "No se pudo actualizar la contraseña"
    })
    return
  })

  res.send({
    msg: actualizacion
  })

}