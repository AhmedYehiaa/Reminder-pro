import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "./types.js";

const formatReminder = (text, dueDate) => ({
  text,
  dueDate,
  id: Math.random()
});

export const addReminder = (text, dueDate) => ({
  type: ADD_REMINDER,
  payload: formatReminder(text, dueDate)
});

export const deleteReminder = id => ({
  type: DELETE_REMINDER,
  payload: id
});

export const clearReminders = () => ({
  type: CLEAR_REMINDERS
});
