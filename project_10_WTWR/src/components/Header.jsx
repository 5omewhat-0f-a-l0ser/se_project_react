import "../blocks/header.css";
import DateDisplay from "../components/DateDisplay";



import logo from "../images/Logo.svg";
import avatar from "../images/avatar.png";

function Header({ onAddBtnClick, weatherData }) {
     const location = "New York"

    return (
        <header className="header">
                <img className="header__logo" src={logo}/>
                <DateDisplay className="header__date-and-location" location={weatherData}/>,
            <button 
                onClick={onAddBtnClick} 
                type="button" 
                className="header__clothes-btn"
            >
                + Add Clothing
            </button>
            <div className="header__user-container">
                <p className="header__username">Terrence Tegegne</p>
                <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
            </div>
        </header>
    )
}

export default Header;