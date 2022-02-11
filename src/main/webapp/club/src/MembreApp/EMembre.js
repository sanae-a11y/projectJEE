import React from "react";
import AdherentList from "../Components/Adherent/AdherentList";
import HeaderMembre from "../Components/Header/HeaderMember";

export default function EMembre() {
  return (
    <div>
      <HeaderMembre />
      <h3
        style={{ marginTop: "4rem", fontFamily: "cursive", marginLeft: "4rem" }}
      >
        Espace Membre :
      </h3>
      <AdherentList />
    </div>
  );
}
