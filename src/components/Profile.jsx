import ClothesSection from "./ClothesSection";
import Sidebar from "./Sidebar";

import "../blocks/profile.css";

function Profile({ onItemCardClick, clothingItems, onAddBtnClick, onCardLike, onUpdateUser, closeModal, onLogoutClick, currentUser, isLoggedIn }) {
  const userItems = clothingItems.filter(item => item.owner === currentUser._id);
  
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar
         onUpdateUser={onUpdateUser}
         closeModal={closeModal}
         onLogoutClick={onLogoutClick}

      />
      </section>
      <section className="profile__closet">
        <ClothesSection
          onItemCardClick={onItemCardClick}
          clothingItems={userItems}
          onAddBtnClick={onAddBtnClick}
          onCardLike={onCardLike}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}

export default Profile;
