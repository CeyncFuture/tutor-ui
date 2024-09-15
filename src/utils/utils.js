import { capitalize } from 'lodash';
import {NotificationManager} from 'react-notifications';

export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}
export function getSubjectById(categories, id) {
  for (const category of categories) {
    const subject = category.subjects.find(subject => subject.id === id);
    if (subject) {
      return subject;
    }
  }
  return null;
};


export function createNotification(type, message, title, duration, callback) {

  //set default duration
  duration = duration || 3000;
  callback = callback || (() => {console.log("default callback");

  })

    switch (type) {
      case 'info':
        NotificationManager.info(message || 'Info message', capitalize(title || 'Info'), duration, callback);
        break;
      case 'success':
        NotificationManager.success(message || 'Success message', capitalize(title || 'Success'), duration, callback);
        break;
      case 'warning':
        NotificationManager.warning(message || 'Warning message', capitalize(title || 'Warning'), duration, callback);
        break;
      case 'error':
        NotificationManager.error(message || 'Error message', (title || 'Error'), duration, callback);
        break;
      default:
        NotificationManager.info(message || 'Info message');
        break;
    }
}
