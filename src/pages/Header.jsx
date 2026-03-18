import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const steps = ["/", "/signup", "/login", "/profile"];

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();

  const currentIndex = steps.indexOf(location.pathname);

  return (
    <div className="topbar">
      <FiHome className="icon" onClick={() => nav("/")} />

      <div className="step-controls">
        <FiChevronLeft
          className={`icon ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={() => currentIndex > 0 && nav(steps[currentIndex - 1])}
        />

        <span className="step-text">
          {currentIndex + 1} of {steps.length}
        </span>

        <FiChevronRight
          className={`icon ${
            currentIndex === steps.length - 1 ? "disabled" : ""
          }`}
          onClick={() =>
            currentIndex < steps.length - 1 &&
            nav(steps[currentIndex + 1])
          }
        />
      </div>
    </div>
  );
}