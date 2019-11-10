import React, { Component } from "react";
import "../styles.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  UNSAFE_componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  render() {
    return (
      <div>
        <div className="clock-days inline">
          {this.leading0(this.state.days)} Days
        </div>
        <div className="clock-hours inline">
          {this.leading0(this.state.hours)} Hours
        </div>
        <div className="clock-minutes inline">
          {this.leading0(this.state.minutes)} Minutes
        </div>
        <div className="clock-seconds inline">
          {this.leading0(this.state.seconds)} Seconds
        </div>
      </div>
    );
  }
}

export default Clock;
