import "../blocks/weathercard.css";
import { weatherOpts, weatherDefaults } from "../utils/constants";

function WeatherCard({ weatherData}) {
  const filterOptions = weatherOpts.filter((option) => {
    return( option.day === weatherData.isDay && 
    option.condtion === weatherData.condtion
  )
  })

  
  let weatherOption;
  if (filterOptions.length === 0) {
    weatherOption = weatherDefaults[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filterOptions[0];
  }

  
  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
      <img src={weatherOption?.url} alt={`Card Showing ${weatherOption?.day ? "day" : "night"}time ${weatherOption?.caption} weather`} className="weather-card__image" />
    </section>
  )
}

export default WeatherCard;