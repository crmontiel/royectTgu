const db = require('../../configuration/ps_connection');

exports.actualizaEstadoUsuario = async function(req, res, next) {

  let esLoginCorrecto = await db.func("seguridad.ft_actualiza_estado_usuario", [req.body.usuario, req.body.id_estado]).catch(error => {
    
    res.send({msg:"Ocurrio un error"})
  })
  
  res.send({msg:"Datos Actualizados"})

}