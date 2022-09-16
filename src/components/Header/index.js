import React from "react";
import * as C from "./styles";
import { useRecoilValue } from "recoil";
import { credentialState } from "../../../atoms/credentialsAtom";

function Header() {
  let credentials = useRecoilValue(credentialState);

  function handleSignOut(e) {
    location.reload();
  }

  return typeof window !== "undefined" &&
    credentials?._tokenResponse?.registered ? (
    <C.Container>
      <C.Titulo>Meus Estudos</C.Titulo>
      <C.signOutContainer>
        <C.signOut onClick={handleSignOut}>Sair</C.signOut>
        <C.ProfilePic src="ProfilePic.jpg" />
      </C.signOutContainer>
    </C.Container>
  ) : (
    <C.Container>
      <C.Titulo>Meus Estudos</C.Titulo>
      <C.ProfilePicNotLogged src="ProfilePic.jpg" />
    </C.Container>
  );
}

export default Header;
