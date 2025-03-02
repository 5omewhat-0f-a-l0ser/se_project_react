import "../blocks/main.css";

import { defaultClothingItems } from "../utils/constants";

import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";

function Main({ weatherData, onItemCardClick }) {
    return (
      <main>
        <WeatherCard weatherData={weatherData}/>
        <section className="cards">
            <p className="cards__text">Today is {weatherData.temp.F} &deg; F / You may want to wear:</p>
        </section>
        <ul className="cards__list">
          {defaultClothingItems.filter((item) => {
            return item.weather === weatherData?.type;
          }).map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onItemCardClick}/>
            )
          })}
        </ul>
      </main>
    )
}

export default Main;