import { useEffect, useState } from "react";

import ModalWithForm from "../components/ModalForm";

function AddItemModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onAddSubmit,
  isSubmitting,
  isSubmissionComplete
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const resetForm = () => {
    setName("");
    setImageUrl("");
    setWeather("");
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen])
  useEffect(() => {
  if (isSubmissionComplete) {
    resetForm();
  }
}, [isSubmissionComplete])

  const validateAdditionForm = () => {
    const isNameValid = name.trim().length >= 2;
    const isImageValid = imageUrl.length >= 2
    const isWeatherValid = weather && (weather === "hot" || weather === "warm" || weather === "cold");
    setIsFormValid(
    isNameValid && isImageValid && isWeatherValid
  );
};

  useEffect(() => {
    validateAdditionForm();
 }, [name, imageUrl, weather]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSubmit(name, imageUrl, weather);
  };

  //AddItemModal//
  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={buttonText}
      title={title}
      closeModal={closeModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      isSubmitting={isSubmitting}
      isFormValid={isFormValid}
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
          required
          onChange={handleUrlChange}
          value={imageUrl}
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
            checked={weather === "hot"}
          />{" "}
          <span>Hot</span>
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="warm"
            checked={weather === "warm"}
          />{" "}
          <span>Warm</span>
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="cold"
            checked={weather === "cold"}
          />{" "}
          <span>Cold</span>
        </label>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
