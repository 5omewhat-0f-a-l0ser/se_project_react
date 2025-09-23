import "../blocks/modal.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState, useContext } from "react";

function ItemModal({ activeModal, card, closeModal, isOpen, deleteCard }) {
   const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card?.owner === currentUser?._id;

  return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_img">
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <img src={card?.imageUrl} alt={card?.name} className="modal__img" />
        <span className="modal__footer_container">
        <div className="modal__footer">
          <h2 className="modal__caption">{card?.name}</h2>
          <p className="modal__weather">Weather: {card?.weather}</p>
        </div>
        {currentUser && isOwn && (
          <button onClick={deleteCard} className="modal__delete">
            Delete Item
          </button>
        )}
        </span>
      </div>
    </div>
  );
}

export default ItemModal;
