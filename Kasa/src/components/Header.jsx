import { NavLink } from "react-router";
export default function Header() {


    return (
      
        <header>
          <div className='logo'>
            <img src="./src/assets/LOGO.png "/>
            </div>
          <nav className='nav-items'>
            <div className='accueil'>Accueil</div>
            
            <NavLink to="/apropos" className='propos'>Products</NavLink>
          </nav>
        </header>

      
    )
  }