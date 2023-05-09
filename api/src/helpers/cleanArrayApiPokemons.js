const axios = require('axios');

function MaysPrimera(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const cleanArray = async (pokemon) => {
  if (!pokemon) return false;

  let regionUrl, regionName;

  try {
    regionUrl = await axios.get(pokemon.location_area_encounters)
      .then(response => response.data)
      .then(encounterData => {
        const firstEncounter = encounterData[0];
        return axios.get(firstEncounter.location_area.url)
          .then(response => response.data)
          .then(locationArea => {
            const location = locationArea.location;
            return axios.get(location.url)
              .then(response => response.data)
              .then(locationData => locationData.region.name);
          });
      });

    regionName = await axios.get(regionUrl)
      .then(response => response.data.name);

  } catch (error) {
    console.log(error);
    regionUrl = "unknown";
    regionName = "unknown";
  }

  return {
    id: pokemon.id,
    name: MaysPrimera(pokemon.forms[0].name),
    image: pokemon.sprites.other["official-artwork"].front_default,
    image_alter: pokemon.sprites.other["official-artwork"].front_shiny,
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((type) => type.type.name),
    create: false,
    region: regionName
  };
};

module.exports = { cleanArray };