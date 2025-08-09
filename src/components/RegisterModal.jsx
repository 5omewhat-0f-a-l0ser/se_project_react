import { useEffect, useState } from "react";

import ModalWithForm from "./ModalForm";
import { use } from "react";

function RegisterModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onAddSubmit,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [weather, setWeather] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(name);
  };

  const handlePasswordChange = (e) => {
    setImageUrl(e.target.value);
  };

  // const handleWeatherChange = (e) => {
  //   setWeather(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSubmit(email, password);
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
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
