import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

import ModalWithForm from "./ModalForm";

function LoginModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onLoginSubmit,
  onSignUpClick,
  isSubmitting
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

   const validateForm = () => {
    const isEmailValid = email.length >= 2 && email.includes("@");
    const isPasswordValid = password.length >= 2 && password.length <= 30;
    setIsFormValid(
      isEmailValid && isPasswordValid
    );
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(email, password);
  };
  

  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={buttonText}
      title={title}
      closeModal={closeModal}
      onSubmit={handleLoginSubmit}
      isOpen={isOpen}
      isSubmitting={isSubmitting}
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
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      </div>
      <div className="modal__signin_container"> 
        <p>or</p>
        <button className="modal__register-btn" 
        type="button"
        onClick={onSignUpClick}>Register</button>
      </div>

     
    </ModalWithForm>
  );
}

export default LoginModal;
