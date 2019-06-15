import { ADD_REMINDER, DELETE_REMINDER } from "./types.js";

const formatReminder = text => ({
  text,
  id: Math.random()
});

export const addReminder = text => ({
  type: ADD_REMINDER,
  payload: formatReminder(text)
});

export const deleteReminder = id => ({
  type: DELETE_REMINDER,
  payload: id
});
