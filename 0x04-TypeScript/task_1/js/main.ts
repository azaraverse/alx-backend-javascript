export interface Teacher {
    readonly firstName: string;
    fullTimeEmployee: boolean;
    readonly lastName: string;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any
};

interface Directors extends Teacher {
    numberOfReports: number;
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstname: string, lastName: string): string => {
    return `${firstname[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// constructor interface
interface studentConstructor {
    firstName: string;
    lastName: string;
}

// class interface
interface studentClassInterface {
    workOnHomeWork(): string;
    displayName(): string;
}

class StudentClass implements studentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: studentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(): string {
        return 'Currently working'
    };

    displayName(): string {
        return this.firstName;
    };
};

// tests
const student1 = new StudentClass({ firstName: 'John', lastName: 'Doe' });
const student2 = new StudentClass({ firstName: 'Sylvia', lastName: 'Peterson' });
console.log(student1.displayName());
console.log(student1.workOnHomeWork);
console.log(student2.lastName);
console.log(student2.displayName());
console.log(student1);
console.log(student2);
