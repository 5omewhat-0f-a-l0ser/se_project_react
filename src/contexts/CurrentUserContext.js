import React, { useState, useEffect } from "react";

const CurrentUserContext = React.createContext();

const logoutUser = async () => {

// If backend has logout endpoint:
// await fetch(`${BASE_URL}/logout`, { method: "POST" });
 // Usually just remove token on frontend

 localStorage.removeItem("jwt");

}; // Add cardLike and remove card like here




export { CurrentUserContext, logoutUser }; 