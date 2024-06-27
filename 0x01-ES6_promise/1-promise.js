export default function getFullResponseFromAPI(success) {
  const newPromise = new Promise((resolve, reject) => {
    const resolveObj = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(resolveObj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });

  return newPromise;
}
