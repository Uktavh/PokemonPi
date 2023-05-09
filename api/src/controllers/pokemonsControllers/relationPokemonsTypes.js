const {Type} = require ('../../db')

const relationPokemonsTypes = async (newPokemon, types) => {
         
          // find type ids on db
          const filteredDbTypes = (await Type.findAll()).filter((type) =>
            types.includes(type.name)
          );
          const typeIds = filteredDbTypes.map((type) => type.id);
      
          await newPokemon.addType(typeIds);
      
};

module.exports = {relationPokemonsTypes};