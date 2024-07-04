interface MajorCredits {
    credits: number;
    brand: "major";
}
interface MinorCredits {
    credits: number;
    brand: "minor";
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major",
    };
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor",
    };
};

// tests
const major1: MajorCredits = { credits: 7, brand: "major" };
const major2: MajorCredits = { credits: 3, brand: "major" };
const minor1: MinorCredits = { credits: 3, brand: "minor" };
const minor2: MinorCredits = { credits: 2, brand: "minor" };

const sumMajors = sumMajorCredits(major1, major2);
const sumMinors = sumMinorCredits(minor1, minor2);

console.log(sumMajors);
console.log(sumMinors);


