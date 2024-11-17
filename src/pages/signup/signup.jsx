import "./signup.css";
import { Helmet } from 'react-helmet';
//import Header from '@/components/header/header'
import MenuSignup from '@/components/signup/MenuSignup'

export default function signup() {
  return (
    <>
      <Helmet>
        <title>APP-BC</title>
        <meta name="description" content="Cadastro de professionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div>
        {/* <Header /> */}
        <MenuSignup />
      </div>
  
      {/* <div className="d-flex justify-content-center p-2">
        <div className="container">
          
        </div>
      </div>   */}
  </>
  )
}


