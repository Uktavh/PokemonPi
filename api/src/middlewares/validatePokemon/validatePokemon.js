const validatePostPokemon = (req,res,next) => {
    const {name,image,hp,attack,defense,speed,height,weight,types} = req.body;
    let err = ' Missing data on the request: ';
    if(!name) err += 'name ';
    if(!image) err += 'image ';
    if(!hp) err += 'hp ';
    if(!attack) err += 'attack ';
    if(!defense) err += 'defense ';
    if(!speed) err += 'speed ';
    if(!height) err += 'height ';
    if(!weight) err += 'weight ';
    if(!types) err += 'types';
    if(err.length>30) return res.status(400).json(err);
    if(!Array.isArray(types)) return res.status(400).json("Pokemon's types data must be an Array");
    next();
};

module.exports = {validatePostPokemon};