import "../blocks/weathercard.css";
import { weatherOpts, weatherDefaults } from "../utils/constants.js";

function WeatherCard({ weatherData}) {


  const filterOptions = weatherOpts.filter((option) => {
    return( option.day === weatherData.isDay && 
    option.condtion === weatherData.condtion
  )
  })

  const weatherOptionUrl = filterOptions[0]?.url || weatherDefaults[weatherData.day ? "day" : "night"].url;
  
  // let weatherOption;
  // if (filterOptions.length === 0) {
  //   weatherOption = weatherDefaults[weatherData.isDay ? "day" : "night"];
  // } else {
  //   weatherOption = filterOptions[0];
  // }

//can this work//

  console.log(filterOptions)
  
  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
      <img src={weatherOptionUrl} alt={`Card Showing ${weatherDefaults?.day ? "day" : "night"}time ${weatherDefaults?.caption} weather`} className="weather-card__image" />
    </section>
  )
}

export default WeatherCard;