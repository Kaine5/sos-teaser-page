const pad = n => {
  return (n < 10 ? "0" : "") + n;
};

export const countdown = target_date => {
  let current_date = new Date().getTime();
  let seconds_left = (target_date - current_date) / 1000;

  const months = pad(parseInt(seconds_left / 2592000));
  seconds_left = seconds_left % 2592000;

  const days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  const hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  const minutes = pad(parseInt(seconds_left / 60));
  const seconds = parseInt(seconds_left % 60);

  return {
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};
