import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Reminder Pro</h1>
      </div>
      <div className="form-inline">
        <div className="form-group">
          <input className="form-control" placeholder="I have to ..." />
        </div>
        <button type="button" className="btn btn-success addReminder">
          Add Reminder
        </button>
      </div>
    </div>
  );
}

export default App;
