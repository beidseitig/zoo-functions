const data = require('../data/zoo_data');

const speciesData = data.species;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) {
    return [];
  }

  const info = speciesData.filter((animalId) => ids.find((animal) => animal === animalId.id));
  return info;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
