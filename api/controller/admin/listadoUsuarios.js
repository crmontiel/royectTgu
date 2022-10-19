const db = require('../../configuration/ps_connection');

exports.listadoUsuarios = async function(req, res, next) {
  let usuarios = await db.func("seguridad.ft_select_usuarios").catch(error => {
    res.send({
      msg:"Algo salio mal"
    })
    return
  })

  res.send({data:usuarios, msg:"datos obtenidos"})

}