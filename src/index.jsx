import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// file Pages
import App from "./App";
// import Hallo from "./pages/hallo";
import Notes from "./pages/Notes";
import Navbar from "./component/Fragments/Navbar";
import NoteDetail from "./pages/NoteDetail";

//file styles
// import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/hallo" element={<Hallo />} /> */}
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:id" element={<NoteDetail />} />
    </Routes>
  </BrowserRouter>
);
