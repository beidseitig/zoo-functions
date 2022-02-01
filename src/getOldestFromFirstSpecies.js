const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const olderSpecie = employees.find((animal) => animal.id === id).responsibleFor[0];
  const specie = species.find((animal) => animal.id === olderSpecie)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(specie);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
