import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Germany from "./pages/Germany";
import UK from "./pages/UK";
import Canada from "./pages/Canada";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;