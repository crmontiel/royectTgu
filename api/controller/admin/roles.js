const db = require('../../configuration/ps_connection');

exports.roles = async function(req, res, next) {
  let datos = await db.func("seguridad.ft_select_toles").catch(error => {
    res.send({
      msg:"Algo salio mal"
    })
    return
  })

  res.send({data:datos, msg:"datos obtenidos"})

}