import "../blocks/switch.css";
  
export default function Switch(){
    return (
        <label htmlFor="tempSwitch" className="switch__label">
            <input type="checkbox" id="tempSwitch" className="switch__checkbox" />
            <span className="switch__circle"></span>
            <span className="switch__text_F">F</span>
            <span className="switch__text_C">C</span>
        </label>
    )
};