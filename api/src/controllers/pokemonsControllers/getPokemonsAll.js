const {Pokemon,Type} = require ('../../db');
const { cleanArray2 } = require('../../helpers/cleanArrayDBPokemon');
const { getApiPokemons } = require('./getApiPokemons');

const getPokemonsAll = async () => {
    try {
		const dbPokemons = (await Pokemon.findAll({
			include: {
				model: Type,
				attributes: ["name"],
				through:{
					attributes: []
				}
			}
		}))

		limpios= dbPokemons.map(elem=>cleanArray2(elem))

    	const parsedPokemons= await getApiPokemons();

    	const allPokemons = [...limpios, ...parsedPokemons];

    	return allPokemons;
	}
	catch (error) {
    	throw Error(error.message);
  	};
};

module.exports = {getPokemonsAll};

