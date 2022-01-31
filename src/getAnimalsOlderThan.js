const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find(({ name }) => name === animal);
  return animals.residents.every((e) => e.age >= age);
};

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
