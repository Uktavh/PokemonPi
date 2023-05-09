const {Pokemon,Type} = require ('../../db');
const axios = require ('axios');
const { cleanArray } = require('../../helpers/cleanArrayApiPokemons');
const { cleanArray2 } = require('../../helpers/cleanArrayDBPokemon');

const getPokemonById = async (id, source) => {
    const pokemon = source === 'api' ?
        cleanArray((await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data) : await cleanArray2(await Pokemon.findByPk(id, {
			include: {
				model: Type,
				attributes: ["name"],
				through:{
					attributes: []
				}
			}
		}))
        return pokemon;
};

module.exports = {getPokemonById};

// la responsabilidad de este modulo es solicitar datos de la API, filtrando solo la informacion que necesitamos, y guardarla para enviarla como respuesta