// este modulo es el encargado o responsable de definir las rutas
const {Router} = require ('express');
const { createPokemonHandler } = require('../../handlers/pokemonsHandlers/createPokemonHandler');
const { getPokemonHandler } = require('../../handlers/pokemonsHandlers/getPokemonHandler');
const { getPokemonsHandler } = require('../../handlers/pokemonsHandlers/getPokemonsHandler');
const { validatePostPokemon } = require('../../middlewares/validatePokemon/validatePokemon');
const {allHandler} = require  ('../../handlers/allHandler')

const pokemonsRouter = Router();

pokemonsRouter.get("/:id",getPokemonHandler); //hechabienbien y getea
pokemonsRouter.get("/",allHandler); // aca va tambien el qery bien bien
pokemonsRouter.post('/', validatePostPokemon, createPokemonHandler); //hechabienbieny postea

module.exports = pokemonsRouter;