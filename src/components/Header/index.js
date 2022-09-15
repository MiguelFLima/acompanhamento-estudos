import { useSession } from "next-auth/react";
import React from "react";
import * as C from "./styles";

function Header() {
  const { data: session } = useSession();

  return (
    <C.Container>
      <C.Titulo>Acompanhamento de Estudos</C.Titulo>
      <C.ProfilePic
        src={session?.user?.image}/>
    </C.Container>
  );
}

export default Header;
