import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ItemModal from "../components/ItemModal";
import AddItemModal from "../components/AddItemModal";
import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";

import Profile from "../components/Profile";

import { getWeather, sortWeatherData } from "../utils/weatherApi";
import { coords, APIKey } from "../utils/constants";
import { defaultClothingItems } from "../utils/constants";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { addItems, deleteItems, getItems } from "../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItem] = useState(defaultClothingItems);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddSubmit = (name, imageUrl, weather) => {
    addItems({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItem([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onSignUpClick = () => {
    setActiveModal("signup");
  }

  const onSignInCLick = () => {
    setActiveModal("signin");
  }

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
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header onAddBtnClick={onAddBtnClick} weatherData={weatherData} onSignUpClick={onSignUpClick} onSignInClick={onSignInCLick}/>

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onItemCardClick={onItemCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onItemCardClick={onItemCardClick}
                  onAddBtnClick={onAddBtnClick}
                />
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
        />
        <RegisterModal
          activeModal={activeModal}
          closeModal={closeActiveModal}
          isOpen={activeModal === "signup"}
        />
        <LoginModal
          activeModal={activeModal}
          closeModal={closeActiveModal}
          isOpen={activeModal === "signin"}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
