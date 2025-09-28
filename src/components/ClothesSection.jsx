import AddItemModal from "./AddItemModal";

import ItemCard from "../components/ItemCard";

import "../blocks/clothesselection.css";

function ClothesSection({
  onItemCardClick,
  clothingItems,
  onAddBtnClick,
  onCardLike,
  isLoggedIn,
  currentUser
}) {
  return (
    <div className="clothes-selection">
      <div className="clothes-selection__description">
        <p className="clothes-selection__label">Your Items</p>
        <button onClick={onAddBtnClick} className="clothes-selection__btn">
          + Add New
        </button>
      </div>
      <ul className="cards__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onItemCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
