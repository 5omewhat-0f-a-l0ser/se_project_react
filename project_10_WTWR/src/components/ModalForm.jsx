import "../blocks/modal.css"

function ModalWithForm() {
    return(
        <div className="modal">
            <form className="modal__form"></form>
            <h2 className="modal__title">New Garment</h2>
            <button type="button" className="modal__close"></button>
            <label htmlFor="name" className="modal__label">
                Name {" "}
                 <input 
                 type="text" 
                 className="modal__input" 
                 id="name" placeholder="name" />
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
                <label htmlFor="" className="modal__label modal__input_type_radio"></label>            </fieldset>
        </div>
    )
}

export default ModalWithForm;