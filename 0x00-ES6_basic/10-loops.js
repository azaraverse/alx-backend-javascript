export default function appendToEachArrayvalue(array, appendString) {
  const newArray = [];

  for (const idx of array) {
    newArray.push(`${appendString}${idx}`);
  }

  return newArray;
}
