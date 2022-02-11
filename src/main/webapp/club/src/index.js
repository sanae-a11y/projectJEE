import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/App";
import LoginAdmin from "./Components/Login/LoginAdmin";
import LoginMembre from "./Components/Login/LoginMembre";
import Header from "./Components/Header/Header";
import Activites from "./App/Activites";
import Activites1 from "./AdminApp/Activites";
import EAdmin from "./AdminApp/EAdmin";
import Membre from "./AdminApp/Membre";
import AdherentEdit from "./Components/Adherent/AdherentEdit";
import Centre from "./Components/Centre/Centre";
import EMembre from "./MembreApp/EMembre";
import MActivites from "./MembreApp/MesActivites";
import MAvis from "./MembreApp/Avis";
// import Land from "./Components/Landing/Landing";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loginMembre" element={<LoginMembre />} />
      <Route path="/loginAdmin" element={<LoginAdmin />} />
      <Route path="/centres" element={<Centre />} />
      <Route path="/acceuil" element={<App />} />
      <Route path="/admin" element={<EAdmin />} />
      <Route path="/membre" element={<EMembre />} />
      <Route path="/header" element={<Header />} />
      <Route path="/activites" element={<Activites />} />
      <Route path="/membres" element={<Membre />} />
      <Route path="/activite" element={<Activites1 />} />
      <Route path="/edit_adh/" element={<AdherentEdit />} />
      <Route path="/myActivities" element={<MActivites />} />
      <Route path="/avis" element={<MAvis />} />
      <Route path="/adherents/:id_adherent" element={<AdherentEdit />} />

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
