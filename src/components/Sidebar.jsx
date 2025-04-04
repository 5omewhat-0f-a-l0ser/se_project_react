import avatar from "../images/avatar.png";

import "../blocks/sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={ avatar } alt="Default User" className="sidebar__img" />
            <p className="sidebar__username">User Name</p>
            
        </div>
    );
}

export default Sidebar;