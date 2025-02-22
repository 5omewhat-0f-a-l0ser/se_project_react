import "../blocks/main.css";

import WeatherCard from "../components/WeatherCard";

function Main() {
    return (
      <main>
        <WeatherCard />
        <section className="cards">
            <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
        </section>
        {/*Todo -- finish the cards*/}
      </main>
    )
}

export default Main;