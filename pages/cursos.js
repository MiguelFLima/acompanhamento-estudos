import Header from "../src/components/Header";
import Tabela from "../src/components/Tabela";
import { useRecoilValue } from 'recoil';
import { credentialState } from '../atoms/credentialsAtom';
import { useRouter } from 'next/router';
import Dashboard from '../src/components/Dashboard';
import * as C from '../src/styles/styles';


  
  function Cursos() {
    const router = useRouter();
    let userCredentials = useRecoilValue(credentialState);
    let token = userCredentials?._tokenResponse?.registered;
    console.log(userCredentials?._tokenResponse?.registered)
  
    if (typeof window !== 'undefined' && token) {
      return (
        <>
            {/* <Header /> */}
            
            {/* DashBoard */}
            <Dashboard />

            {/* Tabela */}
            <Tabela />
        </>
      )
    } else if(typeof window !== 'undefined') {
      router.push('/')
    }
    
    
  }
    
  export default Cursos;
  




//   let credentials = useRecoilValue(credentialState)
//   // const router = useRouter();
//   // const [token, setToken] = useState('');
  
//   // function saveToken() {
//   //   if (typeof window !== 'undefined') {
//   //     window.localStorage.setItem('access_token', credentials?.user?.accessToken)
//   //   }
//   // }
//   // saveToken();
  
//   // useEffect(() => {
//   //   if (typeof window !== 'undefined') {
//   //     setToken(window?.localStorage?.getItem('access_token'))
//   //   }
//   // },[])
  
//   if (typeof window !== 'undefined' && credentials !== undefined) {
//     return (
//       <>
//           <Tabela />
//       </>
//     )
//   } else if(typeof window !== 'undefined') {
//     router.push('/')
//   }
// }
  
// export default Cursos;










// {!session && (
//   <div className={styles.container}>
//     <Link href={'/'}><a className={styles.paragrafo}>Clique aqui para fazer Login</a></Link>
//   </div>
// )}


 // if (typeof window !== 'undefined) {
  // }
