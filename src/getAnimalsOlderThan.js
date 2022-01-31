const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalType = species.find((animals) => animals.name === animal);
  const { checkedAnimals } = animalType;
  return checkedAnimals.every((animalsAge) => animalsAge.age > age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
