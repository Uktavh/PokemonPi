const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require ('./pokemonsRouter/pokemonsRouter')
const typesRouter = require ('./typesRouter/typesRouter')

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/pokemons",pokemonsRouter);
router.use("/types",typesRouter)


module.exports = router;
