// import components
import { NavLink} from "react-router-dom";
import './nav.css';

function Nav(){
  return(
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="products">products</NavLink>
      <NavLink to="about">about</NavLink>
      <NavLink to="contact">contact</NavLink>
    </nav>
  )
}

export default Nav;