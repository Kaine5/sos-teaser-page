import React from "react";

export default class Countdown extends React.Component {
  state = { months: 0, days: 0, hours: 0, minutes: 0 };
  componentDidMount() {
    this.getRemainingTime();
    setInterval(() => {
      this.getRemainingTime();
    }, 60000);
  }
  getRemainingTime = () => {
    let now = new Date(Date.now());
    let deadline = new Date("October 05 2019 00:00");
    let timeDiff = deadline - now;
    let countMonths =
      (Math.trunc(timeDiff / 2592000000) < 10 ? "0" : "") +
      Math.trunc(timeDiff / 2592000000);
    timeDiff = timeDiff % 2592000000;
    let countDays =
      (Math.trunc(timeDiff / 86400000) < 10 ? "0" : "") +
      Math.trunc(timeDiff / 86400000);
    timeDiff = timeDiff % 86400000;
    let countHours =
      (Math.trunc(timeDiff / 3600000) < 10 ? "0" : "") +
      Math.trunc(timeDiff / 3600000);
    timeDiff = timeDiff % 3600000;
    let countMinutes =
      (Math.trunc(timeDiff / 60000) < 10 ? "0" : "") +
      Math.trunc(timeDiff / 60000);
    this.setState({
      months: countMonths,
      days: countDays,
      hours: countHours,
      minutes: countMinutes
    });
  };
  render() {
    return (
      <div className="countdown">
        <CountBox value={this.state.months} title="months" />
        <CountBox value={this.state.days} title="days" />
        <CountBox value={this.state.hours} title="hours" />
        <CountBox value={this.state.minutes} title="minutes" />
      </div>
    );
  }
}

const CountBox = props => {
  return (
    <div className="count-box">
      <div className="count-box-value">{props.value}</div>
      <div className="count-box-title">{props.title}</div>
    </div>
  );
};
