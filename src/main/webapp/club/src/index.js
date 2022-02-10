import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App/App";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Activites from "./Components/Activite/Activites";
import EAdmin from "./Components/Admin/EAdmin";
import Membre from "./Components/Admin/Membre";
import AdminActivites from "./Components/Admin/AdminActivites";
import AdherentEdit from "./Components/Adherent/AdherentEdit";
import ListAdherentComponent from "./Components/Adherent/ListAdherentComponent";
// import Land from "./Components/Landing/Landing";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/acceuil" element={<App />} />
      <Route path="/admin" element={<EAdmin />} />
      <Route path="/header" element={<Header />} />
      <Route path="/activites" element={<Activites />} />
      <Route path="/membres" element={<Membre />} />
      <Route path="/activitesAdmin" element={<AdminActivites />} />
      <Route path="/edit_adh/" element={<AdherentEdit />} />

      {/* <Route path="/" element={<CardMeal />} />
    <Route path="/" element={<Search/>} />
    <Route path="/home" element={<App />} />
    <Route path="/about" element={<About />} >
      <Route path=":idMeal" element={<Route/>}/>
    </Route>
    <Route path="menu" element={<Menu/>} />
    <Route path="popular" element={<Popular />} />
    <Route path="/favorits" element={<Favorits />}>
          <Route path=":idMeal" element={<Route/>}/>
      </Route>
    <Route
    path="*"
    element={
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>
    }
  /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
