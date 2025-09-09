import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../blocks/header.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

//import DateDisplay from "../components/DateDisplay";
import ToggleSwitch from "./ToggleSwitch";

import logo from "../images/Logo.svg";
import avatar from "../images/avatar.png";

function Header({ onAddBtnClick, weatherData, currentUser, onSignInClick, onSignUpClick, onLogoutClick, isLoggedIn}) {
  const today = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  

  const [user, setUser] = useState(null);

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Logo to WTWR: What To Wear"
        />
      </Link>
      <p className="header__date-and-location">
        {today}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          {/* Add Clothing Button */}
          <button
            onClick={onAddBtnClick}
            type="button"
            className="header__clothes-btn"
          >
            + Add Clothing
          </button>

          {/* Profile + Avatar */}
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">
                <span>{currentUser?.name}</span>
              </p>
              <img
                src={currentUser?.avatar || avatar}
                alt={currentUser?.name}
                className="header__avatar"
              />
            </div>
          </Link>

          {/* Log Out */}
          <button
            onClick={onLogoutClick}
            type="button"
            className="header__logout-btn"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          {/* Sign Up */}
          <Link to="/signup">
            <div className="header__link_signup">
              <button
                onClick={onSignUpClick}
                type="button"
                className="header__signup-btn"
              >
                Sign Up
              </button>
            </div>
          </Link>

          {/* Log In */}
          <Link to="/signin">
            <div className="header__link_signin">
              <button
                onClick={onSignInClick}
                type="button"
                className="header__signin-btn"
              >
                Log In
              </button>
            </div>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
