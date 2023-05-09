const validateTypeOfPokemon = (req,res,next) => {
    const {types} = req.body;
    if(!Array.isArray(types)) return res.status(400).json("Pokemon's types data must be an Array");
    next();
};

module.exports = {validateTypeOfPokemon};