const { Op } = require('sequelize');
const {Pokemon,Type} = require ('../../db');
const { cleanArray2 } = require('../../helpers/cleanArrayDBPokemon');
const { getApiPokemons } = require('./getApiPokemons');


const getPokemonsByName = async (name) => {
    const lower = name.toLowerCase()
  
    const dbase = await Pokemon.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: {
          model: Type,
          attributes: ["name"],
          through:{
            attributes: []
          }
        }
      });
      const debasefilter =  dbase.map(elem=>cleanArray2(elem))
    
      const parsedPokemons= await getApiPokemons();
      const filterapipokemons = parsedPokemons.filter((pokemon)=>pokemon.name.toLowerCase() ===lower)
      if (filterapipokemons.length === 0 && dbase.length === 0) {
        return "No se Encontro el pokemon";
      }
  
    return [...debasefilter,...filterapipokemons ];
  };

  module.exports = {getPokemonsByName};