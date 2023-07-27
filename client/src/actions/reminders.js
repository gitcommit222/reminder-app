import * as api from "../api";
import { CREATE_REMINDER, GET_REMINDERS } from "../constants/constants";

//action creator
export const getReminders = () => async (dispatch) => {
  try {
    const { data } = await api.getReminders();
    dispatch({ type: GET_REMINDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createReminder = (reminder) => async (dispatch) => {
  try {
    const { data } = await api.createReminder(reminder);
    dispatch({ type: CREATE_REMINDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
