import { useEffect, useState } from "react";

import ModalWithForm from "./ModalForm";
import { use } from "react";

function LoginModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onLoginSubmit,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(email, password);
  };

  // Validation bits
  

  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={buttonText}
      title={title}
      closeModal={closeModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <div className="modal__container modal__container_type_login">
        <label htmlFor="signin-email" className="modal__label">
          Email{" "}
          <input
            type="email"
            className="modal__input"
            id="signin-email"
            placeholder="Email"
            required
            minLength="1"
            maxLength="30"
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label htmlFor="signin-password" className="modal__label">
          Password
          <input
            type="password"
            className="modal__input"
            id="signin-password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
