import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// file Pages
import App from "./App";

import Notes from "./pages/notes";
import Navbar from "./component/Fragments/Navbar";
import NoteDetail from "./pages/NoteDetail";
import ErrorPage, { NotFoundPage } from "./pages/404";
import MainLayout from "./component/Layouts/MainLayout";
import AddNote from "./pages/AddNote";

//file styles
// import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/notes"
        element={
          <MainLayout>
            <Notes />
          </MainLayout>
        }
      />
      <Route
        path="/notes/:id"
        element={
          <MainLayout>
            <NoteDetail />
          </MainLayout>
        }
      />
      <Route
        path="/notes/new"
        element={
          <MainLayout>
            <AddNote />
          </MainLayout>
        }
      />
      <Route
        path="/*"
        element={
          <MainLayout>
            <NotFoundPage />
          </MainLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);
