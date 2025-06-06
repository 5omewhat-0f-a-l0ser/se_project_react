import { useContext } from "react";
import "../blocks/switch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
  
export default function ToggleSwitch(){
    const {handleToggleSwitchChange, currentTemperatureUnit} = useContext(
        CurrentTemperatureUnitContext
    );

    //console.log(currentTemperatureUnit);
    return (
        <div className="switch">
            <label htmlFor="tempSwitch" className="switch__label">
                <input onChange={handleToggleSwitchChange} type="checkbox" id="tempSwitch" className="switch__checkbox" />
                <span className="switch__circle"></span>
                <span className="switch__text_F">F</span>
                <span className="switch__text_C">C</span>
            </label>
        </div>
    )
};