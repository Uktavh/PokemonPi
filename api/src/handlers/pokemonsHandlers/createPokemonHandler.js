const {createPokemon} = require("../../controllers/pokemonsControllers/createPokemon");
const { relationPokemonsTypes } = require("../../controllers/pokemonsControllers/relationPokemonsTypes");

const createPokemonHandler = async (req,res)=>{
    try{
        const{name,image,hp,attack,defense,speed,height,weight,types} = req.body;
        const newPokemon = await createPokemon (name,image,hp,attack,defense,speed,height,weight,types);
        res.status(200).json(newPokemon);
    }
    catch(error){
        res.status(400).json({error:error.message});
    };
};
module.exports = {createPokemonHandler};