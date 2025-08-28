import ClothesSection from "./ClothesSection";
import Sidebar from "./Sidebar";

import "../blocks/profile.css";

function Profile({ onItemCardClick, clothingItems, onAddBtnClick, onCardLike, onUpdateUser, closModal }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar
         onUpdateUser={onUpdateUser}
         closeModal={closeModal}
      />
      </section>
      <section className="profile__closet">
        <ClothesSection
          onItemCardClick={onItemCardClick}
          clothingItems={clothingItems}
          onAddBtnClick={onAddBtnClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
