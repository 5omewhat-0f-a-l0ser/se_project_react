import "../blocks/additemmodal.css";

function AddItemModal() {
    return(
        <div className="add-item__container">
            <label htmlFor="name" className="add-item__label">
                Name{""}
                <input
                type="text"
                className="add-item__input"
                id="name"
                placeholder="Name"
                />
            </label>
            <label htmlFor="imageURL" className="add-item__label">
                <input 
                type="text" 
                className="add-item__img" 
                id="imageURL"
                placeholder="Image URL"
                />
            </label>
            <div className="add-item__radio">
                <legend className="add-item__legend">Select the weather type:</legend>
                <label htmlFor="hot" className="add-item__label add-item__label_type_radio">
                    <input 
                    type="radio" 
                    className="add-item__radio-input" 
                    id="hot"
                    name="weather"
                    />{" "}
                    <span>
                        Hot
                    </span>
                </label>
                <label htmlFor="warm" className="add-item__label add-item__label_type_radio">
                    <input 
                    type="radio" 
                    className="add-item__radio-input" 
                    id="warm"
                    name="weather"
                    />{" "}
                    <span>
                        Warm
                    </span>
                </label>
                <label htmlFor="cold" className="add-item__label add-item__label_type_radio">
                    <input 
                    type="radio" 
                    className="add-item__radio-input" 
                    id="cold"
                    name="weather"
                    />{" "}
                    <span>
                        Cold
                    </span>
                </label>
            </div>
        </div>
    );
}

export default AddItemModal;