import { GET_REMINDERS } from "../constants/constants";

export default (reminders = [], action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return action.payload;
    default:
      return reminders;
  }
};
