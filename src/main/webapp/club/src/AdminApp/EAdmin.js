import React from "react";
import AdherentList from "../Components/Adherent/AdherentList";
import HeaderAdmin from "../Components/Header/HeaderAdmin";

export default function EAdmin() {
  return (
    <div>
      <HeaderAdmin />
      <h1 style={{ marginLeft: "4rem", marginTop: "2rem" }}>Admin :</h1>
      <AdherentList />
    </div>
  );
}
