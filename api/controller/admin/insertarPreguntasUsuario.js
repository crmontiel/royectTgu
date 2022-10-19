const db = require('../../configuration/ps_connection');

exports.insertarPreguntasUsuario = async function(req, res, next) {
  req.body.forEach(async element => {
    let data = await db.func("seguridad.sp_insert_preguntas_usuario",[element.respuesta,element.pregunta,element.usuario]).catch(error => {
    })  
  });
  

  res.send({
    data:data,
    msg:"Datos Registrados Correctamente"
  })

}