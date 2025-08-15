import React, { useState, useEffect } from "react";
import { existingToken, signin, signup } from "../utils/auth";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      existingToken(jwt)
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleLogin = (email, password) => {
    return signin({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return existingToken(data.token); // Use existingToken instead of checkToken
      })
      .then((userData) => {
        console.log("User data received:", userData);
        setCurrentUser(userData);
        return userData;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const handleSignup = (userData) => {
    return signup(userData)
      .then((data) => {
        return signin({
          email: userData.email,
          password: userData.password,
        })
          .then((signinData) => {
            localStorage.setItem("jwt", signinData.token);
            return existingToken(signinData.token);
          })
          .then((userData) => {
            setCurrentUser(userData);
            return userData;
          });
      })
      .catch((err) => {
        console.log("Context: Signup error:", err);
        throw err;
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleLogin,
        handleLogout,
        handleSignup,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};