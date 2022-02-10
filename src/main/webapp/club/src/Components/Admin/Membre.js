import React from "react";
import AdherentList from "../Adherent/AdherentList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderAdmin from "../Header/HeaderAdmin";
import ListAdherentComponent from "../Adherent/ListAdherentComponent";
import FooterComponent from "../Footer/Footer";

export default function Membre() {
  return (
    <div>
      <HeaderAdmin />
      <ListAdherentComponent />
      <FooterComponent />
    </div>
  );
}
