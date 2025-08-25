import AddItemModal from "./AddItemModal";

import ItemCard from "../components/ItemCard";

import "../blocks/clothesselection.css";

function ClothesSection({ onItemCardClick, clothingItems, onAddBtnClick, onCardLike }) {



  console.log(clothingItems)
    return (
       <div className="clothes-selection">
            <div className="clothes-selection__description">
                <p className="clothes-selection__label">Your Items</p>
                <button onClick={onAddBtnClick} className="clothes-selection__btn">+ Add New</button>
            </div>
            <ul className="cards__list">
                {clothingItems
                  .map((item) => {
                    return (
                      <ItemCard
                        key={item._id}
                        item={item}
                        onCardClick={onItemCardClick}
                        onCardLike={onCardLike}
                      />
                    );
                })}
            </ul>
       </div>
    );
}

export default ClothesSection;