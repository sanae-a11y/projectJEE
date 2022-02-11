import React from "react";
import AdherentList from "../Components/Adherent/AdherentList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderAdmin from "../Components/Header/HeaderAdmin";
import FooterComponent from "../Components/Footer/Footer";

export default function Membre() {
  return (
    <div>
      <HeaderAdmin />
      <AdherentList />
      <FooterComponent />
    </div>
  );
}
