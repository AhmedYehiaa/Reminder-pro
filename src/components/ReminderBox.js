import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class AddReminder extends Component {
  state = {
    text: "",
    dueDate: ""
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addReminder = () => {
    const { text, dueDate } = this.state;
    this.props.addReminder(text, dueDate);
    this.setState({ text: "", dueDate: "" });
  };

  clearReminders = () => {
    this.props.clearReminders();
  };

  render() {
    const { text, dueDate } = this.state;
    const { reminders } = this.props;
    return (
      <div className="form-inline add-reminder">
        <div className="form-group">
          <input
            className="form-control add-reminder-text"
            name="text"
            placeholder="I have to ..."
            value={text}
            onChange={this.handleChange}
          />
          <input
            type="datetime-local"
            name="dueDate"
            value={dueDate}
            className="form-control add-reminder-date"
            onChange={this.handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-success add-reminder-btn"
          onClick={this.addReminder}
          disabled={!text || !dueDate}
        >
          Add Reminder
        </button>
        <button
          type="button"
          className="btn btn-danger reminders-clear-btn"
          disabled={!reminders.length}
          onClick={this.clearReminders}
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reminders: state.reminders
});

export default connect(
  mapStateToProps,
  actions
)(AddReminder);
