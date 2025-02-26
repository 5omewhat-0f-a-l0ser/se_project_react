import "../blocks/modal.css"

function ModalWithForm({ children, buttonText, title, activeModal}) {
    return(
        <div className={`modal ${activeModal === "add-garment" && "modal-opened"}}`}>
            <div className="modal__container">
                <h2 className="modal__title">{title}</h2>
                <button type="button" className="modal__close"></button>
                <form className="modal__form">
                    {children}
                    <button className="modal__submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default ModalWithForm;