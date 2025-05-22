import Navbar from '../components/Navbar.jsx'
import {Outlet} from 'react-router'

function ApplicationLayout({  }){
    return(
       <>
       {/* componente navbar */}
       <Navbar/>
       {/* pagina */}
       <Outlet/>
       </>
    )
}

export default ApplicationLayout