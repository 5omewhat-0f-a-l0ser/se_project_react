import { useState } from "react";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ModalWithForm from "../components/ModalForm";
import ItemModal from "../components/ItemModal";

function App() {
 const [weatherData, setWeatherData] = useState({ type: "hot"});
 const [activeModal, setActiveModal] = useState("");
 const [selectedCard, setSelectedCard] = useState();

 const onItemCardClick = () => {
  setActiveModal("preview");
  setSelectedCard(card);
 }

 const onAddBtnClick = () => {
  setActiveModal("add-garment");
 }

 const closeActiveModal = () => {
  setActiveModal("");
 }

  return (
    <div className="page">
      <div className="page__content">
       <Header onAddBtnClick={onAddBtnClick}/>
       <Main weatherData={weatherData}  onItemCardClick={onItemCardClick}/>
       <Footer />
      </div>
      <ModalWithForm 
        buttonText={"Add Garment"} 
        title={"New Garmnet"} 
        activeModal={activeModal}
        closeModal={closeActiveModal}
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
        />
    </div>
  )
}

export default App;
