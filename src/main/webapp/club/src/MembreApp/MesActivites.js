import React from "react";
import AdherentList from "../Components/Adherent/AdherentList";
import HeaderMembre from "../Components/Header/HeaderMember";

export default function MesActivites() {
  return (
    <div>
      <HeaderMembre />
      <h3
        style={{ marginTop: "4rem", fontFamily: "cursive", marginLeft: "4rem" }}
      >
        Mes Activités :
      </h3>
    </div>
  );
}
