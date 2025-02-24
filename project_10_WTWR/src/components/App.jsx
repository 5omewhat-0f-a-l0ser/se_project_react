import { useState } from "react";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";



function App() {
 const [weatherData, setWeatherData] = useState({ type: "cold"});

  return (
    <div className="page">
      <div className="page__content">
       <Header />
       <Main weatherData={weatherData} />
      </div>
    </div>
  )
}

export default App;
