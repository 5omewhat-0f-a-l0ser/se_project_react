import "../blocks/main.css";

import { defaultClothingItems } from "../utils/constants";

import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";

function Main({ weatherData }) {
    return (
      <main>
        <WeatherCard />
        <section className="cards">
            <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
        </section>
        <ul className="cards__list">
          {defaultClothingItems.filter((item) => {
            return item.weather === weatherData?.type;
          }).map((item) => {
            return (
              <ItemCard key={item._id} item={item}/>
            )
          })}
        </ul>
      </main>
    )
}

export default Main;