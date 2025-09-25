import React, { useState } from "react";

import "../blocks/modal.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeModal,
  escClose,
  onSubmit,
  isOpen,
  isFormValid
}) {
  
  const validSubmitButtonClass = `modal__submit ${!isFormValid ? 'modal__submit_disabled' : ''}`;
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeModal}
         
          type="button"
          className="modal__close"
        ></button>
        <form 
          className="modal__form" 
          onSubmit={onSubmit}>
          {children}
          <button
           type="submit" 
           disabled={!isFormValid}
           className={validSubmitButtonClass}
            >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
