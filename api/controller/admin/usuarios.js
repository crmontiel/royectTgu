const db = require('../../configuration/ps_connection');

exports.usuarios = async function(req, res, next) {

  let datos = await db.func("seguridad.ft_select_usuarios", [0]).catch(error => {
    
    res.send({msg:"Ocurrio un error"})
  })
  
  res.send(datos)

}