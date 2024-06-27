export default function handleResponseFromAPI(promise) {
  const resolveObj = {
    status: 200,
    body: 'Success',
  };
  const newPromise = promise.then(() => (resolveObj));
  const newCatch = newPromise.catch(() => new Error());
  const final = newCatch.finally(() => console.log('Got a response from the API'));

  return final;
}
