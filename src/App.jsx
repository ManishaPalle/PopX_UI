import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing"; // cards view
import LandingScreen from "./pages/LandingScreen"; // full landing page
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} /> {/* ✅ cards */}
        <Route path="/landing" element={<LandingScreen />} /> {/* ✅ full page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;