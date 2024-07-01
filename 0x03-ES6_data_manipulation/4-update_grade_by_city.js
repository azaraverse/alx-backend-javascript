export default function updateStudentGradeByCity(arrayObj, city, newGrades) {
  let array = [];
  array = arrayObj.filter((student) => student.location === city);

  // debug to check the filtered array
  // console.log('filtered array:', array);
  const mappedArray = array.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // debug to check each filtered student and their corresponding grade
    // console.log('Student:', student, 'GradeObj:', gradeObj);
    let grade;
    if (gradeObj) {
      grade = gradeObj.grade;
    } else {
      grade = 'N/A';
    }
    return { ...student, grade };
  });

  return mappedArray;
}
