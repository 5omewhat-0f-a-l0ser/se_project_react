import { defaultClothingItems } from "../utils/constants";

import ItemCard from "../components/ItemCard";

import "../blocks/clothesselection.css";

function ClothesSection() {
    return (
       <div className="clothes-selection">
            <div>
                <p className="clothes__label">YOUR ITEMS</p>
                <button className="clothes__btn">+ ADD NEW</button>
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