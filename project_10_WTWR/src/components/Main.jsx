import "../blocks/main.css";

import { defaultClothingItems } from "../utils/constants";

import WeatherCard from "../components/WeatherCard";

function Main() {
    return (
      <main>
        <WeatherCard />
        <section className="cards">
            <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
        </section>
        <ul className="cards__list">
          {defaultClothingItems.map((item) => {
            return (
              <div key={item._id}>
                <h2>{item.name}</h2>
                <img src={item.link} alt={item.name} />
              </div>
            )
          })}
        </ul>
      </main>
    )
}

export default Main;