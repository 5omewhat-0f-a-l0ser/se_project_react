import { defaultClothingItems } from "../utils/constants";

import ItemCard from "../components/ItemCard";

import "../blocks/clothesselection.css";

function ClothesSection() {
    return (
       <div className="clothes-selection">
            <div className="clothes-selection__description">
                <p className="clothes-selection__label">Your Items</p>
                <button className="clothes-selection__btn">+ Add New</button>
            </div>
            <ul className="cards__list">
                {defaultClothingItems
                  .map((item) => {
                    return (
                      <ItemCard
                        key={item._id}
                        item={item}
                        //onCardClick={onItemCardClick}
                      />
                    );
                })}
            </ul>
       </div>
    );
}

export default ClothesSection;