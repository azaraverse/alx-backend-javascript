import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const responses = await Promise
    .all([uploadPhoto(), createUser()]);
  const photo = responses[0];
  const user = responses[1];
  return {
    photo: {
      status: photo.status,
      body: photo.body,
    },
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };
}
