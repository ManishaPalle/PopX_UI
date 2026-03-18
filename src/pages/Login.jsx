import { useNavigate } from "react-router-dom";
import Header from "./Header";
import RightSidebar from "../components/RighSidebar";

export default function Login() {
  const nav = useNavigate();

  return (
    <>
     <div className="container page-content">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <input placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />

      <button className="primary" onClick={() => nav("/profile")}>
        Login
      </button>
    </div>
     <Header/>
     <RightSidebar/>
     </>
  );
}