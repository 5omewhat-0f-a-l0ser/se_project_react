import "../blocks/modal.css";

function ItemModal({ activeModal, card, closeModal, isOpen }) {
  return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_img">
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <img src={card?.link} alt={card?.name} className="modal__img" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card?.name}</h2>
          <p className="modal__weather">Weather: {card?.weather}</p>
        </div>
        <button className="modal__delete">
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
