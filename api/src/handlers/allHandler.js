// const getAllPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
//   try {
//     const response = await axios.get(url);
//     const pokemons = await Promise.all(
//       response.data.results.map(async (pokemon) => {
//         const pokemonResponse = await axios.get(pokemon.url);
//         return {
//           name: pokemon.name,
//           height: pokemonResponse.data.height
//         };
//       })
//     );
//     if (response.data.next) {
//       const nextPokemons = await getAllPokemons(response.data.next);
//       return [...pokemons, ...nextPokemons];
//     }
//     return pokemons;
//   } catch (error) {
  //     console.error(error);
//   }
// } this made it to the final


const axios = require('axios');
const { cleanArray2 } = require('../helpers/cleanArrayDBPokemon');
const {Pokemon,Type} = require ('../db');
const { cleanArray } = require('../helpers/cleanArrayApiPokemons');
const { getPokemonsByName } = require('../controllers/pokemonsControllers/getPokemonByName');
const { getApiPokemons } = require('../controllers/pokemonsControllers/getApiPokemons');
const { getAllPokemons } = require('../controllers/pokemonsControllers/getAllPokemons');




const allHandler = async (req, res) => {

    const {name} = req.query;
    const results =  name ? await getPokemonsByName(name) :  await getAllPokemons();
    res.status(200).json(results);

};

module.exports = { allHandler };