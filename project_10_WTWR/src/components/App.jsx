import { useState } from "react";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ModalWithForm from "../components/ModalForm";

function App() {
 const [weatherData, setWeatherData] = useState({ type: "hot"});

  return (
    <div className="page">
      <div className="page__content">
       <Header />
       <Main weatherData={weatherData} />
       <Footer />
      </div>
      <ModalWithForm />
    </div>
  )
}

export default App;
