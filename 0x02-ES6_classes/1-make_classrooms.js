import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  const room1_obj = `ClassRoom {_maxStudentsSize: ${room1._maxStudentsSize}}` //eslint-disable-line
  const room2_obj = `ClassRoom {_maxStudentsSize: ${room2._maxStudentsSize}}` //eslint-disable-line
  const room3_obj = `ClassRoom {_maxStudentsSize: ${room3._maxStudentsSize}}` //eslint-disable-line
  return [room1_obj, room2_obj, room3_obj]; //eslint-disable-line
}
