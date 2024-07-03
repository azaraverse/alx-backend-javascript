interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Trent',
    lastName: 'Arnold',
    age: 25,
    location: 'Merseyside'
};

const student2: Student = {
    firstName: 'Lamine',
    lastName: 'Yamal',
    age: 16,
    location: 'Barcelona'
};

const studentsList: Array<Student> = [ student1, student2 ];

const table = (studentArray: typeof studentsList) => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentArray.forEach((student) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        nameCell.textContent = student.firstName;
        row.appendChild(nameCell);

        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

table(studentsList);
