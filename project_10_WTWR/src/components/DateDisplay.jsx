import React from 'react';

const DateDisplay = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return <div>{today}</div>;
};

export default DateDisplay;
