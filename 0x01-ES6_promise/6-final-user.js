import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promise.then((res) => res.map((obj) => ({
    status: obj.status, value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
  })));
}
