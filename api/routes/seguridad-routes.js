var express = require('express');
var router = express.Router();
var seguridad = require('../controller/admin/seguridad-controller');
var mdAunt = require('../middleware/middleware-authentication');

router.use(mdAunt.content_type);
// router.use(mdAunt.key);


router.post('/login', seguridad.login);
router.post('/registrarUsuario', seguridad.registrarUsuario);
router.post('/actualizarPass', seguridad.actualizarPass);
router.post('/preguntasPrimerLogin', seguridad.preguntasPrimerLogin);
router.post('/insertarPreguntasUsuario', seguridad.insertarPreguntasUsuario);
router.post('/actualizaEstadoUsuario', seguridad.actualizaEstadoUsuario);
router.get('/usuarios', seguridad.usuarios);
router.get('/obtenerObjetos', seguridad.obtenerObjetos);
router.get('/roles', seguridad.roles);
router.get('/objetosParametros', seguridad.objetosParametros);

module.exports = router;