export default function getStudentsByLocation(arrayObj, city) {
  let array = [];
  array = arrayObj.filter((item) => item.location === city);

  return array;
}
