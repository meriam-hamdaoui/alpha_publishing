import React from "react";
import MainNav from "./components/navigation/MainNav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MathPage from "./views/MathPage";
import BookrPage from "./views/BookrPage";
import ContactUsPage from "./views/ContactUsPage";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="math-1-5" element={<MathPage />} />
        <Route path="bookr" element={<BookrPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
