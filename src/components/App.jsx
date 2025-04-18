import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import ItemModal from "../components/ItemModal";
import AddItemModal from "../components/AddItemModal";
//import DeleteModal from "../components/DeleteModal";

import Profile from "../components/Profile";

import { getWeather, sortWeatherData } from "../utils/weatherApi";
import { coords, APIKey } from "../utils/constants";
import { defaultClothingItems } from "../utils/constants";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import Api from "../utils/api";


function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const [clothingItems, setClothingItem] = useState(defaultClothingItems);


  const api = new Api({
    baseUrl: 'http://localhost:3001',
    headers: {
      "Content-Type": "application/json"
    }
});

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F"? "C":"F");
  } 
  
  const closeActiveModal = () => {
    setActiveModal("");
  };


  const handleAddSubmit =(name, url, weather) => {
    setClothingItem([{name, link: url, weather}, ...clothingItems]);
    closeActiveModal();
  }

  const onItemCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const deleteCard = () => {
  api
    .deleteCard(selectedCard._id).then(() => {
      setClothingItem(
        clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        })
      );
    });
    closeActiveModal();
  };
  

 
 //useEffect(() => {

 //  if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

 //  const closeModalEsc = (e) => {  // define the function inside useEffect not to lose the reference on rerendering
 //    if (e.key === "Escape") {
 //      closeActiveModal();
 //    }
 //  };

 //  document.addEventListener("keydown", closeModalEsc);

 //  return () => {  // don't forget to add a clean up function for removing the listener
 //    document.removeEventListener("keydown", closeModalEsc);
 //  };
 //}, [activeModal]);

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
    api
      .getItemList()
      .then((items) => {
        setClothingItem(items.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
      <div className="page">
      <div className="page__content">
        <Header onAddBtnClick={onAddBtnClick} weatherData={weatherData} />

        <Routes>
          <Route path="/" element={
            <Main weatherData={weatherData} onItemCardClick={onItemCardClick} clothingItems={clothingItems}/>
            }/>
          <Route path="/profile" element={<Profile onItemCardClick={onItemCardClick}/>}/>
        </Routes>
        
        
        <Footer />
      </div>
      <AddItemModal
         buttonText={"Add Garment"}
         title={"New Garmnet"}
         activeModal={activeModal}
         closeModal={closeActiveModal}
         submit={submitFormBtn}
         isOpen = {activeModal === "add-garment"}
         onAddSubmit={handleAddSubmit}
      />
      <ItemModal
        activeModal={activeModal}
        closeModal={closeActiveModal}
        card={selectedCard}
        isOpen={activeModal === "preview"}
        deleteCard={deleteCard}
      />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  )
}

export default App;
