import { Link } from "react-router-dom"
function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/experiencias">Experiencias</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default Nav