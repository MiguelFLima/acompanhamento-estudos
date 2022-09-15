import { credentials } from '../pages/index';
import Header from "../src/components/Header";
import Tabela from "../src/components/Tabela";
import { useRecoilValue } from 'recoil';
import { credentialState } from '../atoms/credentialsAtom';
import { useRouter } from 'next/router';

function Cursos() {
  const router = useRouter();
  let credentials = useRecoilValue(credentialState)

  console.log(credentials?._tokenResponse?.registered)
  if (typeof window !== 'undefined' && credentials?._tokenResponse?.registered) {
    return (
      <>
          <Header />
          <Tabela />
      </>
    )
  } else if(typeof window !== 'undefined') {
    router.push('/')
  }
  
  
}
  
export default Cursos;










// {!session && (
//   <div className={styles.container}>
//     <Link href={'/'}><a className={styles.paragrafo}>Clique aqui para fazer Login</a></Link>
//   </div>
// )}


 // if (typeof window !== 'undefined) {
  // }
