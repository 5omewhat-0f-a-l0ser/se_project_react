import React from 'react';
import "../blocks/header.css"
const DateDisplay = ({ location }) => {
  const today =  new Date().toLocaleString('default', { month: 'long', day: 'numeric'
  });

  return (
    <div className="header__date header__location">
      <p>{today}</p>
      <p>,</p>
      <p>{location}</p>
    </div>
  );
};

export default DateDisplay;