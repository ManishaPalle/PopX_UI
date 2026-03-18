import { useNavigate } from "react-router-dom";
import Header from "./Header";
import RightSidebar from "../components/RighSidebar";

export default function LandingScreen() {
  const nav = useNavigate();

  return (
    <>
    <div className="container page-content">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button className="primary" onClick={() => nav("/signup")}>
        Create Account
      </button>

      <button className="secondary" onClick={() => nav("/login")}>
        Already Registered? Login
      </button>
    </div>
 <Header/>
<RightSidebar/>
 </>
    
  );
}