const readDatabase = require('../utils');

class StudentsController {
  // static methods
  static getAllStudents(request, response) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then(({ students }) => {
        let res = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        sortedFields.forEach((field, index) => {
          const studentList = students[field];
          res += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`;
          if (index !== sortedFields.length - 1) {
            res += '\n';
          }
        });

        response.status(200).end(res);
      })
      .catch(() => {
        response.status(500).end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
      return;
    }

    const filePath = process.argv[2];
    readDatabase(filePath)
      .then(({ students }) => {
        const studentList = students[major];
        const res = `List: ${studentList.join(', ')}`;
        response.status(200).end(res);
      })
      .catch(() => {
        response.status(500).end('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
