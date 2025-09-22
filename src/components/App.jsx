import { useEffect, useState } from "react";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "../blocks/app.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ItemModal from "../components/ItemModal";
import AddItemModal from "../components/AddItemModal";
import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";
import EditModal from "../components/EditModal";

import ProtectedRoute from "../components/ProtectedRoute";

import Profile from "../components/Profile";

import { getWeather, sortWeatherData } from "../utils/weatherApi";
import { coords, APIKey } from "../utils/constants";
import { defaultClothingItems } from "../utils/constants";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";

import {
  CurrentUserContext
} from "../contexts/CurrentUserContext.js";

import {
  addItems,
  deleteItems,
  getItems,
  loginUser,
  registerUser,
  updateUserProfile,
  logoutUser,
  addCardLike,
  removeCardLike
} from "../utils/api";
import { existingToken } from "../utils/auth.js";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");


  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
    // optional: auto-login from saved token
    const token = localStorage.getItem("token");
    if (token) {
      // fetch user info if backend supports it
      setCurrentUser({ name: "Restored User" });
    }
  }, []);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const token = localStorage.getItem("jwt");

  const handleAddSubmit = (name, imageUrl, weather) => {
    addItems({ name, imageUrl, weather }, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLoginSubmit = (email, password) => {
    
    loginUser(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token)
        existingToken(res.token)
          .then((data) => {
            setCurrentUser(data);
           setIsLoggedIn(true);
            navigate("/");
          })
          closeActiveModal();
      })
      .catch(console.error);
    
  };

  const handleRegisterSubmit = async ({ name, email, password, avatar }) => {
   try {
    if (!email || !password) {
      console.error("Email or password missing!", { name, email, password, avatar });
      return;
    }

    await registerUser(name, email, password, avatar);

    const loginRes = await loginUser(email, password);
    localStorage.setItem("jwt", loginRes.token);
    
    const userData = await existingToken(loginRes.token);
    setCurrentUser(userData);
    setIsLoggedIn(true);

    closeActiveModal();
    navigate("/");
  } catch (err) {
    console.error("Registration failed:", err);
  }
};


 const handleUpdateUser = (userData) => {
  updateUserProfile(userData.name, userData.avatar)
    .then((updatedUser) => {
      setCurrentUser(updatedUser);
      closeActiveModal();
    })
    .catch((err) => console.error("Failed to update user:", err));
};

  const onLogoutClick = () => {
    logoutUser(localStorage.getItem("token"))
    .then(() => {
      setCurrentUser({});
      setIsLoggedIn(false);
      navigate("/signin"); // redirect to login
    })
    .catch((err) => console.error("Logout failed:", err));
  };

  const onUpdateClick =() => {
    setActiveModal("update");
  }

  const onSignUpClick = () => {
    setActiveModal("signup");
  };

  const onSignInClick = () => {
    setActiveModal("signin");
  };

  const onItemCardClick = (card, _id, token) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const deleteCard = () => {
    deleteItems(selectedCard._id, token)
      .then(() => {
        console.log(selectedCard._id);
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id !== selectedCard._id;
          }),
          closeActiveModal()
        );
      })
      .catch(console.error);
  };

  //Likes
  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    
    !isLiked
      ? 
        addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      :
        removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));

        // console.log('Token being sent:', token);
        // console.log('ID being sent:', _id);
  };

  //api//

  useEffect(() => {
    getWeather(coords, APIKey)
      .then((data) => {
        const filterWeather = sortWeatherData(data);
        setWeatherData(filterWeather);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              onAddBtnClick={onAddBtnClick}
              weatherData={weatherData}
              currentUser={currentUser}
              onSignInClick={onSignInClick}
              onSignUpClick={onSignUpClick}
              onLogoutClick={onLogoutClick}
               isLoggedIn={isLoggedIn}
            />

            <Routes>
              <Route
                path="/"
                element={
                    <Main
                      weatherData={weatherData}
                      onItemCardClick={onItemCardClick}
                      clothingItems={clothingItems}
                      onCardLike={handleCardLike}
                      currentUser={currentUser} 
                     
                    />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      onItemCardClick={onItemCardClick}
                      onAddBtnClick={onAddBtnClick}
                      onCardLike={handleCardLike}
                      onUpdateUser={onUpdateClick}
                      closeModal={closeActiveModal}
                      onLogoutClick={onLogoutClick}

                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <RegisterModal
                    onSignUpClick={onSignUpClick}
                    buttonText={"Register"}
                    title={"Register"}
                    activeModal={activeModal}
                    closeModal={() => navigate("/")} 
                    isOpen={activeModal === "signup"}
                    onRegisterSubmit={handleRegisterSubmit}
                    onSignInClick={() => navigate("/signin")}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <LoginModal
                    buttonText={"Login"}
                    title={"Login"}
                    activeModal={activeModal}
                    closeModal={() => navigate("/")} 
                    isOpen={activeModal === "signin"}
                    onLoginSubmit={handleLoginSubmit}
                    onSignUpClick={() => navigate("/signup")}
                  />
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? <Navigate to="/profile" /> : <Navigate to="/" />
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            buttonText={"Add Garment"}
            title={"New Garmnet"}
            activeModal={activeModal}
            closeModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddSubmit={handleAddSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            closeModal={closeActiveModal}
            card={selectedCard}
            isOpen={activeModal === "preview"}
            deleteCard={deleteCard}
            onCardLike={handleCardLike}
          />
          <EditModal
            activeModal={activeModal}
            closeModal={closeActiveModal}
            buttonText={"Save Changes"}
            title={"Edit Profile"}
            isOpen={activeModal === "update"}
            onUpdateSubmit={handleUpdateUser}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
