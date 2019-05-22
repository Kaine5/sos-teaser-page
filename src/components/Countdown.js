import React from "react";
import { countdown } from "../helpers/countdown";

export default class Countdown extends React.Component {
  state = { months: 0, days: 0, hours: 0, minutes: 0 };
  componentDidMount() {
    this.getRemainingTime();
    setInterval(() => {
      this.getRemainingTime();
    }, 1000);
  }
  getRemainingTime = () => {
    let deadline = new Date("October 05 2019 00:00").getTime();
    const { months, days, hours, minutes, seconds } = countdown(deadline);

    this.setState({
      months: months,
      days: days,
      hours: hours,
      minutes: minutes
    });
  };
  render() {
    return (
      <div className='countdown'>
        <CountBox value={this.state.months} title='months' />
        <CountBox value={this.state.days} title='days' />
        <CountBox value={this.state.hours} title='hours' />
        <CountBox value={this.state.minutes} title='minutes' />
      </div>
    );
  }
}

const CountBox = props => {
  return (
    <div className='count-box'>
      <div className='count-box-value'>{props.value}</div>
      <div className='count-box-title'>{props.title}</div>
    </div>
  );
};
