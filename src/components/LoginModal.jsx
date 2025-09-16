import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

import ModalWithForm from "./ModalForm";
import { use } from "react";

function LoginModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onLoginSubmit,
  onSignUpClick
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);


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

  // Validation bits
  

  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={buttonText}
      title={title}
      closeModal={closeModal}
      onSubmit={handleLoginSubmit}
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
      <div className="modal__signin_container"> 
        <p>or</p>
        <button className="modal__register-btn" 
        type="button"
        onClick={() => navigate("/signup")}>Register</button>
      </div>

     
    </ModalWithForm>
  );
}

export default LoginModal;
