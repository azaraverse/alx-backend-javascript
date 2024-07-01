export default function getListStudentIds(arrayObjs) {
  let array = [];
  if (!Array.isArray(arrayObjs)) {
    return array;
  }
  array = arrayObjs.map((item) => [item.id]);
  return array.flat();
}
