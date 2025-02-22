import "../blocks/weathercard.css";

import shirt from "../images/shirt.png";
import shorts from "../images/shorts.png";

function WeatherCard() {
    return (
      <div className="container">
        <p className="card__text">Today's weather is...</p>
        <img src={shirt} alt="clothing" className="card" />
      </div>
    )
}

export default WeatherCard;