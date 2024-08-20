const http = require('http');
const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
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

    let response = '';
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
    response += `Number of students: ${numberOfStudents}\n`;

    // log the number of students in each field and their names
    let index = 0;
    const entries = Object.entries(students);
    for (const [field, names] of entries) {
      index += 1;
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      if (index !== entries.length) {
        response += '\n';
      }
    }

    resolve(response);
  });
});

const port = 1245;
const filePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(filePath)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port);

module.exports = app;
