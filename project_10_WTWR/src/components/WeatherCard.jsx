import "../blocks/weathercard.css";
import { weatherOpts } from "../utils/constants";

import sunny from "../images/day/sunny.png";

function WeatherCard({ weatherData}) {
  const filterOptions = weatherOpts.filter((option) => {
    return( option.day === weatherData.isDay && 
    option.condtion === weatherData.condtion
  )
  })

  const weatherOptUrl = filterOptions[0]?.url;
  
  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
      <img src={weatherOptUrl} alt="sunny" className="weather-card__image" />
    </section>
  )
}

export default WeatherCard;