import {
  getProviders,
  signIn as SignIntoProvider,
  useSession,
} from "next-auth/react";
import { useState } from "react";
import * as C from "../src/components/Login/styles.js";
import Header from "../src/components/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import {useRouter} from 'next/router';
import { useRecoilState } from "recoil";
import { credentialState } from "../atoms/credentialsAtom.js";

function Signin() {
  const [credentials, setCredentials] = useRecoilState(credentialState);
  const router = useRouter();
  const [data, setData] = useState({
    usuario: "",
    senha: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    if (data.senha == '' || data.usuario == '') {
      alert('Preencha os campos');
      
    } else { 
      signInWithEmailAndPassword(auth, data.usuario, data.senha)
      .then( async ( userCredential ) => {
        return setCredentials(userCredential);
      })
      .catch((error) => {
        console.log(error)
      })
      setData({ usuario: "", senha: "" });
    }
  }

  if(credentials?.user?.accessToken !== undefined) {
    router.push('/cursos')
  }



  return (
    <>
      <Header />
      <C.Body>
        <C.ContainerLogin>
          <C.Titulo>Bem vindo(a) </C.Titulo>
          <C.Label htmlFor="usuario">Digite seu usuário:</C.Label>
          <C.Input
            placeholder="Usuário"
            value={data.usuario}
            onChange={(e) => setData({ ...data, usuario: e.target.value })}
            id="usuario"
          />
          <C.Label htmlFor="senha">Digite sua senha:</C.Label>
          <C.Input
            placeholder="Senha"
            value={data.senha}
            id="senha"
            onChange={(e) => setData({ ...data, senha: e.target.value })}
          />
          <C.Botao onClick={handleLogin}>Entrar</C.Botao>
        </C.ContainerLogin>
      </C.Body>
    </>
  );
}

export default Signin;

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}
