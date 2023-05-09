const {Pokemon,Type} = require ('../../db');
const { cleanArray } = require('../../helpers/cleanArrayApiPokemons');
const { cleanArray2 } = require('../../helpers/cleanArrayDBPokemon');
const { getApiPokemons } = require('./getApiPokemons');

const getAllPokemons = async () => {
    try {
      const apipokemons = await getApiPokemons();
      const dbPokemons = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through:{
            attributes: []
          }
        }
      });
  
          let limpios= dbPokemons.map(elem=>cleanArray2(elem))
  
          const allPokemons = [...apipokemons,...limpios];
  
          return allPokemons;
  
    } catch (error) {
      throw Error(error.message);
    }
  }

  
  module.exports = {
    getAllPokemons
  }