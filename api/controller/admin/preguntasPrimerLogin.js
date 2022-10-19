const db = require('../../configuration/ps_connection');

exports.preguntasPrimerLogin = async function(req, res, next) {
  let data = await db.func("seguridad.ft_obtener_preguntas_primer_login").catch(error => {
    res.send({
      msg:"error"
    })
    return
  })

  res.send({
    data:data,
    msg:"Datos Obtenidos"
  })

}