import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./styles/colors.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </>
  );
}