import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// file Pages
import App from "./App";

import Notes from "./pages/notes";
import Navbar from "./component/Fragments/Navbar";
import NoteDetail from "./pages/NoteDetail";
import ErrorPage, { NotFoundPage } from "./pages/404";

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
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
