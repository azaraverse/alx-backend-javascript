const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  let numberOfStudents = 0;
  const students = {};

  // read the file content
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // console.log(data)
    // split the content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // console.log(lines)

    // remove the header (first line)
    lines.shift().split(',');
    // console.log(header)

    // loop each line to count the students and group them by fields and firstnames
    lines.forEach((line) => {
      const studentData = line.split(',');
      // console.log(studentData)
      const field = studentData[3];
      // console.log(field)
      const firstName = studentData[0];
      // console.log(firstName)

      numberOfStudents += 1;

      // handle field not yet in the student obj by initialising it
      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(firstName);
    });
    // console.log(students)
    console.log(`Number of students: ${numberOfStudents}`);

    // log the number of students in each field and their names
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    resolve({ numberOfStudents, students });
  });
});

module.exports = readDatabase;
