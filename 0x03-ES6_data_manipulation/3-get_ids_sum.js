export default function getStudentIdsSum(arrayObj) {
  return arrayObj.reduce((prevId, objId) => prevId + objId.id, 0);
}
