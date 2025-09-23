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
}) {

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
           // disabled={isDisabled}
           className="modal__submit 
              modal__submit_type_login 
              modal__submit_type_register 
              modal__submit_type_edit 
              "
              >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
