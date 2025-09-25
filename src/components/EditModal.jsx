import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import ModalWithForm from "./ModalForm";

function EditModal({activeModal, closeModal, isOpen, buttonText, title, onUpdateSubmit, currentUser, isSubmitting}) {
  // const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

 const validateEditForm = () => {
  const isNameValid = name && name.trim().length >= 2 && name.trim().length <= 30;
  const isAvatarValid = avatar && avatar.trim().length > 0;
  setIsFormValid(isNameValid && isAvatarValid);
};

 useEffect(() => {
  if (currentUser && isOpen) {
    setName(currentUser.name || "");
    setAvatar(currentUser.avatar || "");
  }
}, [currentUser, isOpen]);

useEffect(() => {
  validateEditForm();
}, [name, avatar]);

  const handleSubmit = (e) => {
  e.preventDefault();
  onUpdateSubmit({ name, avatar });
  };

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
      <label htmlFor="update-user" className="modal__label">
        Name*{" "}
        <input
          className="modal__input"
          type="text"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="update-imageUrl" className="modal__label">
        Avatar URL{" "}
        <input
          className="modal__input"
          type="url"
          value={avatar || ""}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditModal;