import { useEffect, useState } from "react";

import ModalWithForm from "./ModalForm";
import { use } from "react";

function RegisterModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onRegisterSubmit,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setImageUrl("");
  }, [isOpen]);

    const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterSubmit(email, password, name, imageUrl);
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
      <label htmlFor="signup-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="signup-email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="signup-password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="signup-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="signup-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="signup-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="signup-imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="signup-imageUrl"
          placeholder="Image Url"
          onChange={handleUrlChange}
          value={imageUrl}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
