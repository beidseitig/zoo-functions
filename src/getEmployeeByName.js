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

module.exports = getEmployeeByName;
