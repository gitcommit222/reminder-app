import axios from "axios";

const url = "http://localhost:5000/api/reminders";

export const getReminders = () => axios.get(url);
export const createReminder = (newReminder) => axios.post(url, newReminder);
