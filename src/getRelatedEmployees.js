const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((post) => post.managers.find((checkId) => checkId === id));

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return employees.filter((subordinate) =>
      subordinate.managers.includes(managerId)).map((subordinate) =>
      `${subordinate.firstName} ${subordinate.lastName}`);
  }
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
