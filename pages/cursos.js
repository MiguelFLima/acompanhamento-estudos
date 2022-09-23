import Tabela from "../src/components/Tabela";
import { useRouter } from 'next/router';
import Dashboard from '../src/components/Dashboard';
import { tokenService } from "../src/auth/tokenService";


  
  function Cursos(token) {
    const router = useRouter();
    console.log(token)
    if (typeof window !== 'undefined' && token !== null) {
      return (
        <div>
            <Dashboard />
            <Tabela />
        </div>
      )
    }
  }
    
  export default Cursos;


  export async function getServerSideProps(ctx)  {  
    const token = tokenService.get(ctx);
  
    return {
      props: {
        token,
      }
    }
  }
  




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
