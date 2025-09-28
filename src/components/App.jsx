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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
  const token = localStorage.getItem("jwt");  // ✅ Correct key
  
  if (token) {
    // ✅ Validate token with backend and get real user data
    existingToken(token)
      .then((userData) => {
        setCurrentUser(userData);    
        setIsLoggedIn(true);        
      })
      .catch((error) => {
        localStorage.removeItem("jwt");
        setCurrentUser({});
        setIsLoggedIn(false);
      });
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
        setIsSubmitting(true);
        setIsSubmissionComplete(true);
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
            setIsSubmitting(true);
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
    setIsSubmitting(true);

    closeActiveModal();
    navigate("/");
  } catch (err) {
    console.error("Registration failed:", err);
  }
};


 const handleUpdateUser = (userData) => {
   console.log("Sending this data:", userData);
  updateUserProfile(userData)
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

  //other BS
  


  //Likes
  const handleCardLike = ({ _id, isLiked }) => {
    console.log("Like has been clicked!");
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
                      isLoggedIn={isLoggedIn}
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
                      currentUser={currentUser}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            buttonText={"Add Garment"}
            title={"New Garment"}
            activeModal={activeModal}
            closeModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddSubmit={handleAddSubmit}
            isSubmitting={isSubmitting}
            isSubmissionComplete={isSubmissionComplete}
           
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
            currentUser={currentUser} 
            isSubmitting={isSubmitting}
          />
          <LoginModal
              buttonText={"Login"}
              title={"Login"}
              activeModal={activeModal}
              closeModal={closeActiveModal} 
              isOpen={activeModal === "signin"}
              onLoginSubmit={handleLoginSubmit}
              onSignUpClick={onSignUpClick}
              isSubmitting={isSubmitting}
             
          />
            <RegisterModal
              onSignUpClick={onSignUpClick}
              buttonText={"Register"}
              title={"Register"}
              activeModal={activeModal}
              closeModal={closeActiveModal} 
              isOpen={activeModal === "signup"}
              onRegisterSubmit={handleRegisterSubmit}
              onSignInClick={onSignInClick}
              isSubmitting={isSubmitting}
              
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
