import React, { useState } from 'react';

import "../blocks/modal.css"

function ModalWithForm({ children, buttonText, title, activeModal, closeModal, escCLose, submit}) {
    const [imageSrc, setImageSrc] = useState("");

    

    const handleSubmit = (evt) => {
        preventDefault(evt);
        console.log("image added:", imageSrc);
    }

    return(
        <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
            <div className="modal__container">
                <h2 className="modal__title">{title}</h2>
                <button onClick={ closeModal } type="button" className="modal__close"></button>
                <form className="modal__form" onSubmit={handleSubmit}>
                    {children}
                    <button type="submit" className="modal__submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default ModalWithForm;