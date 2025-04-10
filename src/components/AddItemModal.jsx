import { useState } from "react";


import "../blocks/additemmodal.css";

import ModalWithForm from "../components/ModalForm"

function AddItemModal({
    activeModal,
    closeModal,
    submit,
    isOpen
    }) {

    const [name, setName] = useState("");
    return(
        <ModalWithForm
           activeModal={activeModal}
           closeModal={closeModal}
           submit={submit}
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
               onChange={(e)=>{setName(e.target)}}
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
    );
}

export default AddItemModal;