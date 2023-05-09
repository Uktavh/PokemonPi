const {Pokemon,Type} = require ('../../db');

const createPokemon = async (name,image,hp,attack,defense,speed,height,weight,types) => {

    const newPokemon = await Pokemon.create({name,image,hp,attack,defense,speed,
    height,weight});

    const typeDb = await Type.findAll({
        where: {
            name: types,
        },
    });

    newPokemon.addType(typeDb);
    tipo= typeDb.map(elem => elem.name)
    return {...newPokemon.dataValues,types:tipo};
};

module.exports = {createPokemon};

// la responsabilidad de este modulo es manejar la DB, crear un elemento en la lista, busca el o los types, hace la asociacion entre tablas y devuelve el pokemon para mostrarlo como respuesta ala peticion get