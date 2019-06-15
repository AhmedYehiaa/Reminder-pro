import {
  ADD_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDERS
} from "../actions/types";
import { bake_cookie, read_cookie } from "sfcookies";

const deleteReminder = (reminders, id) => {
  return reminders.filter(reminder => reminder.id !== id);
};

export default function(state = [], action) {
  state = read_cookie("reminders");
  switch (action.type) {
    case ADD_REMINDER:
      const reminders = [...state, action.payload];
      bake_cookie("reminders", reminders);
      return reminders;

    case DELETE_REMINDER:
      const filteredReminders = deleteReminder([...state], action.payload);
      return filteredReminders;

    case CLEAR_REMINDERS:
      bake_cookie("reminders", []);
      return [];

    default:
      return state;
  }
}
