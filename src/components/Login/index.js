import React, { useState } from "react";
import * as C from "./styles";

function Login() {
 
  return (
    <C.Body>
      <C.ContainerLogin>
        <C.Titulo>Bem vindo(a) </C.Titulo>
        <C.Label htmlFor="usuario">Digite seu usuário:</C.Label>
        <C.Input
          placeholder="Usuário"
          value={data.usuario}
          onChange={(e) => setData({ ...data, usuario: e.target.value})}
          id="usuario"
        />
        <C.Label htmlFor="senha">Digite sua senha:</C.Label>
        <C.Input
          placeholder="Senha"
          value={data.senha}
          id="senha"
          onChange={(e) => setData({...data, senha: e.target.value})}
        />
        <C.Botao onClick={handleLogin}>Entrar</C.Botao>
      </C.ContainerLogin>
    </C.Body>
  );
}

export default Login;
