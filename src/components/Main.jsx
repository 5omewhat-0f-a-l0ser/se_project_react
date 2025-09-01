import { useContext } from "react";
import "../blocks/main.css";

import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";


function Main({ weatherData, onItemCardClick, clothingItems, onCardLike, currentUser }) {

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {currentTemperatureUnit === "F" ? weatherData.temp.F :
          weatherData.temp.C} &deg;  {currentTemperatureUnit} / You may want to wear:
        </p>
      </section>
      <ul className="cards__list">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData?.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onItemCardClick}
                onCardLike={onCardLike}
                currentUser={currentUser} 
              />
            );
          })}
      </ul>
    </main>
  );
}

export default Main;
