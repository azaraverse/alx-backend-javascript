export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Given argument not of array type');
  }
  return new Set(array);
}
