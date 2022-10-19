const db = require('../../configuration/ps_connection');

exports.registrarUsuario = async function(req, res, next) {
  let registro = await db.func("seguridad.sp_insert_usuario", 
    [
      req.body.nombreUsuario,req.body.pass,req.body.rolId,
      req.body.estado,req.body.email,req.body.usuarioCrea
    ]).catch(error => {
    res.send({msg:"Ocurrio un error al intentar registrar el usuario"})
  })

  res.send(registro)

}