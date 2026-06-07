const employeesData = {
  "ax01": 1300,
  "qs84": 840,
  "bg33": 2700
};

const findEmployeeSalary = function(employeeID) {
  if (employeeID in employeesData) {
    return employeesData[employeeID];
  }
  return -1;
};