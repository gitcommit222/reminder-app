import * as api from "../api";
import { GET_REMINDERS } from "../constants/constants";

//action creator
export const getReminders = () => async (dispatch) => {
  try {
    const { data } = await api.getReminders();
    dispatch({ type: GET_REMINDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
