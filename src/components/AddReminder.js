import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
class AddReminder extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  addReminder = () => {
    this.props.addReminder(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            className="form-control"
            name="reminder"
            placeholder="I have to ..."
            value={text}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-success addReminder"
          onClick={this.addReminder}
        >
          Add Reminder
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(AddReminder);
