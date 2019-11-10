import React, { Component } from "react";
import Clock from "./clock";
import "../styles.css";
import { Form, FormControl, Button } from "react-bootstrap";

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 27 2019",
      newDeadline: ""
    };
  }
  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">Countdown App</h1>
        <h2 className="heading2">Countdown to {this.state.deadline}</h2>

        <Clock deadline={this.state.deadline} />

        <Form className=".center">
          <FormControl
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
            placeholder="New Date"
            className="Deadline-input"
          />
          <Button
            onClick={() => {
              this.changeDeadline();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default app;
