import { useLocation, useNavigate } from "react-router-dom";
import { Search, HelpCircle, LayoutGrid } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Landing Screen";
        case "/landing":
  return "Landing Screen";
      case "/login":
        return "Login Screen";
      case "/signup":
        return "Signup Screen";
      case "/profile":
        return "Profile";
      default:
        return "";
    }
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <LayoutGrid size={20} />

   
        <span className="logo" onClick={() => navigate("/")}>
          devtask
        </span>

        <span className="divider">›</span>
        <span className="page">{getPageName()}</span>
      </div>

      <div className="nav-right">
        <Search size={30} className="icon" />
        <HelpCircle size={30} className="icon" />
        <button className="signin-btn">Sign in</button>
      </div>
    </div>
  );
}