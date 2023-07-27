import { CREATE_REMINDER, GET_REMINDERS } from "../constants/constants";

export default (reminders = [], action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return action.payload;
    case CREATE_REMINDER:
      return [...reminders, action.payload];
    default:
      return reminders;
  }
};
