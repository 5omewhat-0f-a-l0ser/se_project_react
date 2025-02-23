import React from 'react';

const DateDisplay = ({ location }) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div>
      <p>{today}</p>
      <p>{location}</p>
    </div>
  );
};

export default DateDisplay;