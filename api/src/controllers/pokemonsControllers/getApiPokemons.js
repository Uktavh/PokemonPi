const { default: axios } = require("axios");
const { cleanArray } = require("../../helpers/cleanArrayApiPokemons");

const MAX_DEPTH = 2;
// getApiPokemons = async () => {

//     const pokemonPromises = [];
//     let i = 1;
    
//     while (i <= 10) {
//         let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
//         pokemonPromises.push(apiData);
//         i++;
//     };
    
//     const rawPokemons = (await Promise.all(pokemonPromises)).map(
//         (response) => response.data);

//     const parsedPokemons = rawPokemons.map((pokemon) => cleanArray(pokemon));
//     return parsedPokemons;
// };

// module.exports = {getApiPokemons};

// la responsabilidad de este modulo es solicitar datos de la API, filtrando solo la informacion que necesitamos, y guardarla en un Array para su posterior consumo tras enviarlo como respuesta

const getApiPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon', depth = 0) => {
  try {
    if (depth > MAX_DEPTH) {
      return [];
    }
    
    const response = await axios.get(url);
    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemono = (await axios.get(pokemon.url)).data;
        return await cleanArray(pokemono)
      })
    );
    if (response.data.next) {
      const nextPokemons = await getApiPokemons(response.data.next, depth + 1);
      return [...pokemons, ...nextPokemons];
    }
    return pokemons;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {getApiPokemons}