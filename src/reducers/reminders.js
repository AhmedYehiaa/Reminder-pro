import { ADD_REMINDER, DELETE_REMINDER } from "../actions/types";

const deleteReminder = (reminders, id) => {
  return reminders.filter(reminder => reminder.id !== id);
};

export default function(state = [], action) {
  switch (action.type) {
    case ADD_REMINDER:
      return [...state, action.payload];
    case DELETE_REMINDER:
      const filteredReminders = deleteReminder([...state], action.payload);
      return filteredReminders;

    default:
      return state;
  }
}
