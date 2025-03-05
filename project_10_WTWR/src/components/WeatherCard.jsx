import "../blocks/weathercard.css";
import { weatherOpts } from "../utils/constants";

function WeatherCard({ weatherData}) {
  const filterOptions = weatherOpts.filter((option) => {
    return( option.day === weatherData.isDay && 
    option.condtion === weatherData.condtion
  )
  })

  const weatherOptUrl = filterOptions[0]?.url;
  const weatherOptCaption = filterOptions[0]?.condtion;
  
  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
      <img src={weatherOptUrl} alt={`Card Showing ${weatherOptCaption}`} className="weather-card__image" />
    </section>
  )
}

export default WeatherCard;