import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignu(firstName, lastName, fileName) {
  const promises = Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promises
    .then(() => {
    //
    })
    .catch(() => {
    //
    });
}
