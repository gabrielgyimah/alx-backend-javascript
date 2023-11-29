import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promises
    .then((res) => ({ status: res.status, value: res.value }))
    .catch((rej) => ({ status: rej.status, value: (String(rej.reason)) }));
}
