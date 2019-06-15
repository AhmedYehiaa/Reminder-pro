import React from "react";
import "./App.css";
import AddReminder from "./AddReminder";
import RemindersList from "./RemindersList";

function App() {
  return (
    <div className="App">
      <div className="title">
        <p>Reminder Pro</p>
      </div>
      <AddReminder />
      <RemindersList />
    </div>
  );
}

export default App;
