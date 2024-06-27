export default function handleResponseFromAPI(promise) {
  const resolveObj = {
    status: 200,
    body: 'success',
  };
  // when the promise resolves,
  const newPromise = promise.then(() => resolveObj);
  // when the promise rejects,
  const newCatch = newPromise.catch(() => new Error());
  // on every resolution,
  const final = newCatch.finally(() => {
    console.log('Got a response from the API');
  });

  return final;
}
