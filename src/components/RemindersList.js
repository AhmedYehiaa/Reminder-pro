import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class RemindersList extends Component {
  state = {};

  render() {
    return (
      <ul className="list-group col-ms-4 reminders-list">
        {this.props.reminders.map(reminder => (
          <li className="list-group-item list-items" key={reminder.id}>
            <div className="list-item">{reminder.text}</div>
            <div
              className="list-item delete-button"
              onClick={() => this.props.deleteReminder(reminder.id)}
            >
              {" "}
              &#x2715;{" "}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  reminders: state.reminders
});
export default connect(
  mapStateToProps,
  actions
)(RemindersList);
