import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const responses = await Promise
      .all([uploadPhoto(), createUser()]);
    const photo = responses[0];
    const user = responses[1];
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
