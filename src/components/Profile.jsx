import Sidebar from "./Sidebar";

function Profile() {
    return (
        <div className="profile">
            <section className="profile__sidebar">
                <Sidebar/>
            </section>
            <section className="profile__closet"></section>
        </div>
    );
}

export default Profile;