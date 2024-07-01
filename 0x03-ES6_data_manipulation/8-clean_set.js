export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || startString.length === 0 || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  for (const item of set) {
    if (item.startsWith(startString) && typeof item === 'string') {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
