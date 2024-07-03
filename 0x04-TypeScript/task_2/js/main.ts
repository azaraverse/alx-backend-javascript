interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    };

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    };

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    };
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    };

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    };

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: string | number): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
};

// tests
console.log(createEmployee(200).getCoffeeBreak());
// Output: Teacher
// Cannot have a break
console.log(createEmployee(1000).workFromHome());
// Output: Director
// Working from home
// console.log(createEmployee('$500').workDirectorTasks());
// Output: Director
// Getting to director tasks

const isDirector = (employee: any): employee is Director => {
    return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
};

// tests
console.log(executeWork(createEmployee(200)));
// Output: Getting to work
console.log(executeWork(createEmployee(1000)));
// Output: Getting to director tasks

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

// tests
console.log(teachClass('Math'));
// Output: Teaching Math
console.log(teachClass('History'));
// Output: Teaching Histor

