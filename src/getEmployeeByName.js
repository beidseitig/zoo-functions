const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeDetails = employees.find((theEmployee) =>
  (theEmployee.firstName === employeeName || theEmployee.lastName === employeeName));

  if (employeeDetails === undefined) {
    return {};
  }

  return employeeDetails;
}

console.log(getEmployeeByName('Nelson'))

//Crédito do código ao Allan Carvalho https://github.com/tryber/sd-19-c-project-zoo-functions/pull/1/files

module.exports = getEmployeeByName;
