import ClothesSection from "./ClothesSection";
import Sidebar from "./Sidebar";

import "../blocks/profile.css";

function Profile({ onItemCardClick, clothingItems, onAddBtnClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar />
      </section>
      <section className="profile__closet">
        <ClothesSection
          onItemCardClick={onItemCardClick}
          clothingItems={clothingItems}
          onAddBtnClick={onAddBtnClick}
        />
      </section>
    </div>
  );
}

export default Profile;
