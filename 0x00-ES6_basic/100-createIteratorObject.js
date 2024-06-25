export default function createIteratorObject(report) {
  const array = [];
  const employees = report.allEmployees;

  for (const item in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, item)) {
      array.push(...employees[item]);
    }
  }

  return array;
}
