import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import MissionVision from "./components/VisionAndMission/VisionAndMission";
import Footer from "./components/Footer/Footer";

import PrivatePricingPage from "./pages/PrivatePricingPage";
import ScrollToTop from "./ScrollToTop";

import "./App.css";
import "./styles/colors.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <MissionVision />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* 🔒 Private pricing page */}
        <Route
          path="/p/9f3c7a4e2b1c"
          element={<PrivatePricingPage />}
        />
      </Routes>
    </>
  );
}
