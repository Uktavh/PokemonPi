function MaysPrimera(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const cleanArray2 = (pokemon) => {
    return {
      id: pokemon.id,
      name: MaysPrimera(pokemon.name),
      image: pokemon.image,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map((type)=>type.name),
      create: pokemon.create,
    };
  };

module.exports = {cleanArray2}