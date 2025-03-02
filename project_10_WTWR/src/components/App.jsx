import { useEffect, useState } from "react";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ModalWithForm from "../components/ModalForm";
import ItemModal from "../components/ItemModal";

import { getWeather, sortWeatherData } from "../utils/weatherApi";
import { coords, APIKey } from "../utils/constants";

function App() {
 const [weatherData, setWeatherData] = useState({ 
  type: "hot",
  temp: { F: 999 },
  city: "",
 });
 const [activeModal, setActiveModal] = useState("");
 const [selectedCard, setSelectedCard] = useState();

 const onItemCardClick = (card) => {
  setActiveModal("preview");
  setSelectedCard(card);
 }

 const onAddBtnClick = () => {
  setActiveModal("add-garment");
 }

 //close const's/functions//

 const closeActiveModal = () => {
  setActiveModal("");
 }

 const closeModalEsc = (evt) => {
  if (evt.key === "Escape") {
    closeActiveModal(activeModal);
  }
};

  const submitFormBtn = () => {
    closeActiveModal("add-garment")
  }
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
    <div className="page">
      <div className="page__content">
       <Header onAddBtnClick={onAddBtnClick} weatherData={weatherData}/>
       <Main weatherData={weatherData}  onItemCardClick={onItemCardClick}/>
       <Footer />
      </div>
      <ModalWithForm 
        buttonText={"Add Garment"} 
        title={"New Garmnet"} 
        activeModal={activeModal}
        closeModal={closeActiveModal}
        escClose={closeModalEsc}
        submit={submitFormBtn}
        >
        <label htmlFor="name" className="modal__label">
            Name {" "}
             <input 
             type="text" 
             className="modal__input" 
             id="name" placeholder="Name" />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
            Image {" "}
             <input 
             type="url" 
             className="modal__input" 
             id="imageUrl" placeholder="Image Url" />
        </label>
        <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label modal__label_type_radio">
                <input id="hot" type="radio" className="modal__radio-input" /> Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label_type_radio">
                <input id="warm" type="radio" className="modal__radio-input" /> Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label_type_radio">
                <input id="cold" type="radio" className="modal__radio-input" /> Cold
            </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal 
        activeModal={activeModal}
        closeModal={closeActiveModal}
        card={selectedCard}
        escClose={closeModalEsc}
        />
    </div>
  )
}

export default App;
