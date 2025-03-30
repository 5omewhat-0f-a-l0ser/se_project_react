import { useEffect, useState } from "react";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ModalWithForm from "../components/ModalForm";
import ItemModal from "../components/ItemModal";

import { getWeather, sortWeatherData } from "../utils/weatherApi";
import { coords, APIKey } from "../utils/constants";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F"? "C":"F");
  }

  const onItemCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  //close const's/functions//

  const closeActiveModal = () => {
    setActiveModal("");
  };

 //useEffect(() => {

 //  if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

 //  const closeModalEsc = (e) => {  // define the function inside useEffect not to lose the reference on rerendering
 //    if (e.key === "Escape") {
 //      closeActiveModal();
 //    }
 //  };

 //  document.addEventListener("keydown", closeModalEsc);

 //  return () => {  // don't forget to add a clean up function for removing the listener
 //    document.removeEventListener("keydown", closeModalEsc);
 //  };
 //}, [activeModal]);

  const submitFormBtn = () => {
    closeActiveModal();
  };
  //api//

  useEffect(() => {
    getWeather(coords, APIKey)
      .then((data) => {
        const filterWeather = sortWeatherData(data);
        setWeatherData(filterWeather);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
      <div className="page">
      <div className="page__content">
        <Header onAddBtnClick={onAddBtnClick} weatherData={weatherData} />
        <Main weatherData={weatherData} onItemCardClick={onItemCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        buttonText={"Add Garment"}
        title={"New Garmnet"}
        activeModal={activeModal}
        closeModal={closeActiveModal}
        submit={submitFormBtn}
        isOpen = {activeModal === "add-garment"}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image Url"
          />
        </label>
        <div className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              name="weather"
              className="modal__radio-input"
            />{" "}
            <span>
            Hot
            </span>
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              name="weather"
              className="modal__radio-input"
            />{" "}
           <span>
            Warm
            </span>
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              name="weather"
              className="modal__radio-input"
            />{" "}
           <span>
            Cold
            </span>
          </label>
        </div>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        closeModal={closeActiveModal}
        card={selectedCard}
        isOpen = {activeModal === "preview"}
      />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
