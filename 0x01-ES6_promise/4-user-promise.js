export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const credentials = {
      firstName,
      lastName,
    };
    if (credentials) {
      resolve(credentials);
    }
  });
}
