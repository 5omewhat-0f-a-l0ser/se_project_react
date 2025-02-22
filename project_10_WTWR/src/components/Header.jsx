import "../blocks/header.css";

import logo from "../images/Logo.svg";
import avatar from "../images/Ellipse 18.png";

function Header() {
    return (
        <header className="header">
                <img className="header__logo" src={logo}/>
                <p className="header__date-and-location">Date,Location</p>
            <button className="header__clothes-btn">+ Add Clothing</button>
            <div className="header__user-container">
                <p className="header__username">Name</p>
                <img src={avatar} alt="UserName" className="header__avatar" />
            </div>
        </header>
    )
}

export default Header;