import ClothesSection from "./ClothesSection";
import Sidebar from "./Sidebar";

import "../blocks/profile.css";

function Profile() {
    return (
        <div className="profile">
            <section className="profile__sidebar">
                <Sidebar/>
            </section>
            <section className="profile__closet">
                <ClothesSection/>
            </section>
        </div>
    );
}

export default Profile;