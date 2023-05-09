const { getPokemonsByName } = require("../../controllers/pokemonsControllers/getPokemonByName");
const { getPokemonsAll } = require("../../controllers/pokemonsControllers/getPokemonsAll");

const getPokemonsHandler = async (req,res) => {
    const {name} = req.query;
    const results =  name ? await getPokemonsByName(name) : await getPokemonsAll();
    res.status(200).json(results);
};

module.exports = {getPokemonsHandler};