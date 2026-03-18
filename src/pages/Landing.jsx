import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import "./Landing.css";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="landing">
      <h4>4 Screens</h4>
      <p className="updated">Link updated: May 9, 2023, 8:43 AM</p>

      <div className="cards">

        {/* Landing Preview */}
        <div className="card" onClick={() => nav("/landing")}>
          <div className="preview">
            <div className="mini">
              <h4>Welcome to PopX</h4>
              <button className="primary">Create Account</button>
              <button className="secondary">Login</button>
            </div>
          </div>
          <p>Landing Screen</p>
        </div>

        {/* Login Preview */}
        <div className="card" onClick={() => nav("/login")}>
          <div className="preview">
            <div className="mini">
              <Login />
            </div>
          </div>
          <p>Login Screen</p>
        </div>

        {/* Signup Preview */}
        <div className="card" onClick={() => nav("/signup")}>
          <div className="preview">
            <div className="mini">
              <Signup />
            </div>
          </div>
          <p>Signup Screen</p>
        </div>

        {/* Profile Preview */}
        <div className="card" onClick={() => nav("/profile")}>
          <div className="preview">
            <div className="mini">
              <Profile />
            </div>
          </div>
          <p>Profile</p>
        </div>

      </div>
    </div>
  );
}
