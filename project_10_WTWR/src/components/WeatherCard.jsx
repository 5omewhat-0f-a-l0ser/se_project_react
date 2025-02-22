import "../blocks/weathercard.css";

import sunny from "../images/Sun.png";

function WeatherCard() {
    return (
      <section className="weather-card">
        <p className="weather-card__info">75 &deg; F</p>
        <img src={sunny} alt="Sun" className="weather-card__image" />
      </section>
    )
}

export default WeatherCard;