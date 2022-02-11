import React from "react";
import AdherentList from "../Components/Adherent/AdherentList";
import HeaderMembre from "../Components/Header/HeaderMember";

export default function Avis() {
  return (
    <div>
      <HeaderMembre />
      <h3
        style={{ marginTop: "4rem", fontFamily: "cursive", marginLeft: "4rem" }}
      >
        Donner mon avis sur le Club:
      </h3>
    </div>
  );
}
