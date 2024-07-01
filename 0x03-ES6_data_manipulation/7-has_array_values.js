export default function hasValuesFromArray(set, array) {
  const fact = array.every((element) => set.has(element));

  if (fact) {
    return true;
  }
  return false;
}
