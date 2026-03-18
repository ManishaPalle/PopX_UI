import "./RightSidebar.css";
import { FiMessageSquare, FiCode, FiBox } from "react-icons/fi";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="icon-wrapper">
        <FiMessageSquare className="side-icon" />
        <span className="badge">99+</span>
      </div>

      <FiCode className="side-icon" />
      <FiBox className="side-icon" />
    </div>
  );
}