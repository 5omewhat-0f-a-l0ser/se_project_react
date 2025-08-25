import { useContext } from "react";
import { Link } from "react-router-dom";
import "../blocks/header.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

//import DateDisplay from "../components/DateDisplay";
import ToggleSwitch from "./ToggleSwitch";

import logo from "../images/Logo.svg";
import avatar from "../images/avatar.png";

function Header({ onAddBtnClick, weatherData, currentUser}) {
  const today = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const userContext = useContext(CurrentUserContext);

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
      <button
        onClick={onAddBtnClick}
        type="button"
        className="header__clothes-btn"
      >
        + Add Clothing
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">
            <span>{userContext.currentUser?.name || "Guest"}</span>
          </p>
          <img src={avatar} alt={userContext.currentUser?.name} className="header__avatar" />
        </div>
      </Link>
      <a href="/signin">Sign In</a>
      <a href="/signup">Sign Up</a>
    </header>
  );
}

export default Header;
