import RightSidebar from "../components/RighSidebar";
import Header from "./Header";

export default function Profile() {
  return (
    <>
    <div className="container page-content">
      <h3>Account Settings</h3>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img
          src="https://i.pravatar.cc/50"
          alt="profile"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <strong>Marry Doe</strong>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p style={{ marginTop: "15px" }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr...
      </p>
    </div>
<Header/>
<RightSidebar/>
    </>
  );
}