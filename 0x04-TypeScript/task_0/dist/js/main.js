var student1 = {
    firstName: 'Trent',
    lastName: 'Arnold',
    age: 25,
    location: 'Merseyside'
};
var student2 = {
    firstName: 'Lamine',
    lastName: 'Yamal',
    age: 16,
    location: 'Barcelona'
};
var studentsList = [student1, student2];
var table = function (studentArray) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    studentArray.forEach(function (student) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        nameCell.textContent = student.firstName;
        row.appendChild(nameCell);
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
};
table(studentsList);
//# sourceMappingURL=main.js.map