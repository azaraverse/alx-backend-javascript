export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint);

  if (count === undefined) {
    count = 1;
    weakMap.set(endpoint, count);
  } else {
    count += 1;
    weakMap.set(endpoint, count);
  }

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
