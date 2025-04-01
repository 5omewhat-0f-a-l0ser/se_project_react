import { useContext } from "react";
import "../blocks/weathercard.css";
import { weatherOpts, weatherDefaults } from "../utils/constants.js";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const timeOfDay = weatherData.isDay ? "day" : "night";
  const condition = weatherData.condition;

  const weatherOptionUrl = weatherOpts[timeOfDay]?.[condition] || weatherDefaults[timeOfDay]?.url;

  const weatherCaption = weatherDefaults[timeOfDay]?.caption || condition || "unknown";


  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOptionUrl}
        alt={`Card Showing ${timeOfDay} time ${weatherCaption} weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
