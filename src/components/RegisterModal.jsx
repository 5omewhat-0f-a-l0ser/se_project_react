import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import ModalWithForm from "./ModalForm";
import { use } from "react";

import { registerUser } from "../utils/api"

function RegisterModal({
  buttonText,
  title,
  activeModal,
  closeModal,
  isOpen,
  onRegisterSubmit,
  handleRegistration,
  onSignInClick,
  isSubmitting
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();


 const validateRegisterForm = () => {
  const isEmailValid = email.trim().length >= 2 && email.includes("@");
  const isPasswordValid = password.length >= 2 && password.length <= 30;
  const isNameValid = name.trim().length >= 2 && name.trim().length <= 30;
  const isAvatarValid = avatar.trim().length > 0;
  setIsFormValid(
    isEmailValid && isPasswordValid && isNameValid && isAvatarValid
  );
};

  useEffect(() => {
    validateRegisterForm();
  }, [email, password, name, avatar]);

   useEffect(() => {
    validateRegisterForm();
  }, [email, password, name, avatar]);


    const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const handleRegisterSubmit = (e) => {
  e.preventDefault();
   const finalAvatar = avatar.trim() !== "" 
    ? avatar 
    : `https://i.pinimg.com/736x/85/83/05/8583056ec38aff65961650a9673f1fa0.jpg`
  onRegisterSubmit({ name, email, password, avatar: finalAvatar});
  };



  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={buttonText}
      title={title}
      closeModal={closeModal}
      onSubmit={handleRegisterSubmit}
      handleRegistration={handleRegistration}
      isOpen={isOpen}
      isSubmitting={isSubmitting}
      isFormValid={isFormValid}
    >
      <label htmlFor="signup-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="signup-email"
          name="email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="signup-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="signup-password"
          name="password"
          placeholder="Password"
          required
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
          name="name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="signup-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="signup-avatar"
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleUrlChange}
          value={avatar}
        />
      </label>
      <div className="modal__signup_container"> 
        <p>or</p>
        <button className="modal__login-btn" 
        type="button"
        onClick={onSignInClick}>Log In</button>
      </div>

    </ModalWithForm>
  );
}

export default RegisterModal;
