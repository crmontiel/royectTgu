const db = require('../../configuration/ps_connection');

exports.objetosParametros = async function(req, res, next) {
  let datos = await db.func("seguridad.ft_select_objetos_parametros",[req.body.id]).catch(error => {
    res.send({
      msg:"Algo salio mal"
    })
    return
  })

  res.send({data:datos, msg:"datos obtenidos"})

}