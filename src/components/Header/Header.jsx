import './Header.css'
import {Link} from "react-router-dom"


function Header() { 

    return (
      <>
        <div className='header'>
            <Link to="/" className='title'>
            Intutive Quiz Hub
            <hr className='devider'/>
            </Link>
        </div>
      </>
    )
  }
  
  export default Header