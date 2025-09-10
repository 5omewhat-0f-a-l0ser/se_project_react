import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import ModalWithForm from "./ModalForm";

function EditModal({activeModal, closeModal, isOpen, buttonText, title, onUpdateSubmit}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateSubmit();
  };
  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={buttonText}
      title={title}
      closeModal={closeModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="update-user" className="modal__label">
        Name{" "}
        <input
          type="text"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="update-imageUrl" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          value={avatar || ""}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditModal;