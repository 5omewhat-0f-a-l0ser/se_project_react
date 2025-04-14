import { Link } from "react-router-dom";
import "../blocks/header.css";

//import DateDisplay from "../components/DateDisplay";
import Switch from "../components/Switch";

import logo from "../images/Logo.svg";
import avatar from "../images/avatar.png";

function Header({ onAddBtnClick, weatherData }) {
  const today = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo to WTWR: What To Wear"/>
      </Link>
      <p className="header__date-and-location">
        {today}, {weatherData.city}
      </p>
      <Switch/>
      <button
        onClick={onAddBtnClick}
        type="button"
        className="header__clothes-btn"
      >
        + Add Clothing
      </button>
      <Link to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
