const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () =>
  species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});

const countAnimals = (animal) => {
  if (!animal) {
    return allAnimals();
  }

  const specific = species.find(({ name }) => name === animal.specie);

  if (animal.sex) {
    return specific.residents.filter(({ sex }) => sex === animal.sex).length;
  }

  return specific.residents.length;
};

console.log(countAnimals());

// Crédito ao código de Adson Reis https://github.com/tryber/sd-19-c-project-zoo-functions/pull/4/files

module.exports = countAnimals;
