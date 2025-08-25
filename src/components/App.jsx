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

import ProtectedRoute from "../components/ProtectedRoute";

import Profile from "../components/Profile";

import { getWeather, sortWeatherData } from "../utils/weatherApi";
import { coords, APIKey } from "../utils/constants";
import { defaultClothingItems } from "../utils/constants";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { addItems, deleteItems, getItems } from "../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItem] = useState(defaultClothingItems);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  //using the lessons for this part, still struggling to remember the steps
  const handleRegistration = ({
    name,
    email,
    password
  }) => {
    if (password) {
      auth.register(name, password, email)
       .then(() => {
         navigate("/profile");
        })
        .catch(console.error);
    }
  };


  const closeActiveModal = () => {
    setActiveModal("");
  };

  const token = localStorage.getItem("jwt");

  const handleAddSubmit = (name, imageUrl, weather) => {
    addItems({ name, imageUrl, weather }, token)
      .then((newItem) => {
        setClothingItem([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLoginSubmit = (email, password) => {
    closeActiveModal();
    // find existing_id in backend
  };

  const handleRegisterSubmit = (email, Password, name, imageUrl) => {
    closeActiveModal();
    //make a call to api to register, i.e make a function
  };

  const onSignUpClick = () => {
    setActiveModal("signup");
  };

  const onSignInCLick = () => {
    setActiveModal("signin");
  };

  const onItemCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const deleteCard = () => {
    deleteItems(selectedCard._id)
      .then(() => {
        console.log(selectedCard._id);
        setClothingItem(
          clothingItems.filter((item) => {
            return item._id !== selectedCard._id;
          }),
          closeActiveModal()
        );
      })
      .catch(console.error);
  };

  const submitFormBtn = () => {
    closeActiveModal();
  };

  //Likes
const handleCardLike = ({ id, isLiked }) => {
  const token = localStorage.getItem("jwt");
  // Check if this card is not currently liked
  !isLiked
    ? // if so, send a request to add the user's id to the card's likes array
      api
        // the first argument is the card's id
        .addCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err))
    : // if not, send a request to remove the user's id from the card's likes array
      api
        // the first argument is the card's id
        .removeCardLike(id, token) 
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
  }

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
        setClothingItem(items.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              onAddBtnClick={onAddBtnClick}
              weatherData={weatherData}
              onSignInClick={onSignInCLick}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Main
                    weatherData={weatherData}
                    onItemCardClick={onItemCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                  </ProtectedRoute>
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
                    closeModal={closeActiveModal}
                    isOpen={activeModal === "signup"}
                    onRegisterSubmit={handleRegisterSubmit}
                    handleRegistration={handleRegistration}
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
                  closeModal={closeActiveModal}
                  isOpen={activeModal === "signin"}
                  onLoginSubmit={handleLoginSubmit}
                  onSignUpClick={onSignUpClick}
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
            submit={submitFormBtn}
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
          </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}


// Had to ask ChatGPT for guidance here after I had a recent grad help and Dot's help too, Google didn't help one bit XD

export default App;
