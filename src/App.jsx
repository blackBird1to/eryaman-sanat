import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Courses from "./pages/Courses";
import Exhibitions from "./pages/Exhibitions";
import Contact from "./pages/Contact";
import "./index.css";

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </LanguageProvider>
  );
}
