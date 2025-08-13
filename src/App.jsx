import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arre from "./Components/arre";
import AddMoviePage from "./Components/AddMoviePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Arre />} />
        <Route path="/add-movie" element={<AddMoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
