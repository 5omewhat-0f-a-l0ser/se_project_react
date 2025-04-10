import { useState } from "react";


import "../blocks/additemmodal.css";

import ModalWithForm from "../components/ModalForm"
import { use } from "react";

function AddItemModal({
    buttonText,
    title,
    activeModal,
    closeModal,
    isOpen
    }) {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [weather, setWeather] = useState("");

    const handleSubmit = () => {
        
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        //console.log(name);
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
        console.log(url);
    }

    const handleWeatherChange = (e) => {
        setWeather(e.target.value);
    }

    //AddItemModal//
    return(
        <ModalWithForm
           activeModal={activeModal}
           buttonText={buttonText}
           title={title}
           closeModal={closeModal}
           onSubmit={handleSubmit}
           isOpen={isOpen}
        >
           <label htmlFor="name" className="modal__label">
             Name{" "}
             <input
               type="text"
               className="modal__input"
               id="name"
               placeholder="Name"
               required
               minLength="1"
               maxLength="30"
               onChange={handleNameChange}
               value={name}
             />
           </label>
           <label htmlFor="imageUrl" className="modal__label">
             Image{" "}
             <input
               type="url"
               className="modal__input"
               id="imageUrl"
               placeholder="Image Url"
               onChange={handleUrlChange}
               value={url}
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
                 onChange={handleWeatherChange}
                 value="hot"
                 checked={weather==="hot"}
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
                 onChange={handleWeatherChange}
                 value="warm"
                 checked={weather==="warm"}
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
                 onChange={handleWeatherChange}
                 value="cold"
                 checked={weather==="cold"}
               />{" "}
              <span>
               Cold
               </span>
             </label>
           </div>
        </ModalWithForm>
    );
}

export default AddItemModal;