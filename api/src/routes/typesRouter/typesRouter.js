// este modulo es el encargado o responsable de definir las rutas
const {Router} = require ('express');
const { getTypesHandler } = require('../../handlers/TypeHandlers/getTypesHandler');

const typesRouter = Router();

typesRouter.get("/", getTypesHandler)//anda bienbien



module.exports = typesRouter