import React from "react";
import * as C from "./styles";

function Header() {
  return (
    <C.Container>
      <C.Titulo>Acompanhamento de Estudos</C.Titulo>
      <C.ProfilePic
        src="/ProfilePic.jpg"/>
    </C.Container>
  );
}

export default Header;
