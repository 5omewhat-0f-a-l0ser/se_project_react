import "../blocks/header.css";
import DateDisplay from "../components/DateDisplay";

import logo from "../images/Logo.svg";
import avatar from "../images/avatar.png";

function Header() {
     const location = "New York"

    return (
        <header className="header">
                <img className="header__logo" src={logo}/>
                <DateDisplay location={location} className="header__date-and-location" />
            <button className="header__clothes-btn">+ Add Clothing</button>
            <div className="header__user-container">
                <p className="header__username">Name</p>
                <img src={avatar} alt="UserName" className="header__avatar" />
            </div>
        </header>
    )
}

export default Header;