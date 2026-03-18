import { useNavigate } from "react-router-dom";
import Header from "./Header";
import RightSidebar from "../components/RighSidebar";

export default function Signup() {
  const nav = useNavigate();

  return (
    <>
    <div className="container page-content">
      <h2>Create your PopX account</h2>

      <input placeholder="Full Name" />
      <input placeholder="Phone number" />
      <input placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <input placeholder="Company name" />

      <div className="radio-group">
        <p>Are You an Agency?</p>
  <label className="radio-label">
    <input type="radio" name="agency" />
    Yes
  </label>

  <label className="radio-label">
    <input type="radio" name="agency" />
    No
  </label>
</div>
      <button className="primary" onClick={() => nav("/profile")}>
        Create Account
      </button>
    </div>
    <Header/>
    <RightSidebar/>
    </>
   
  );
}