import avatar from "../images/avatar.png";
import { useContext } from "react";

import EditModal from "../components/EditModal";

import {
  CurrentUserContext
} from "../contexts/CurrentUserContext.js";

import "../blocks/sidebar.css";

function Sidebar({ onUpdateUser, closeModal, onLogoutClick}) {
    const currentUser = useContext(CurrentUserContext);
    return (
        <div className="sidebar">
            <img 
              src={currentUser?.avatar || avatar}
              alt={currentUser?.name || "Default User"}
              className="sidebar__img"
            />
            <p className="sidebar__username">{currentUser?.name || "Default User"}</p>
        <span className="sidebar__btns">
        <button
          className="sidebar__edit-btn"
          type="button"
          onClick={onUpdateUser}
        >
          Change profile data
        </button>
        <button
          className="sidebar__logout-btn"
          onClick={onLogoutClick}
          type="button"
        >
          Log out
        </button>
      </span>
         
        </div>
    );
}

export default Sidebar;