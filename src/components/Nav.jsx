import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importamos PropTypes
import { ArrowUpward } from '@mui/icons-material'; // Icono de flecha hacia arriba
import { gsap } from "gsap"; // Importamos GSAP
import ScrollToPlugin from "gsap/ScrollToPlugin"; // Importamos el plugin ScrollTo

gsap.registerPlugin(ScrollToPlugin); // Registra el plugin

function Nav({ isVisible }) {
  const [isArrowVisible, setIsArrowVisible] = useState(false); // Estado para mostrar la flecha

  // Efecto para controlar la visibilidad de la flecha
  useEffect(() => {
    if (isVisible) {
      setIsArrowVisible(false); // Si el nav es visible, escondemos la flecha
    } else {
      setIsArrowVisible(true); // Si el nav no es visible, mostramos la flecha
    }
  }, [isVisible]);

  // Función para animar la flecha al hacer clic
  const handleArrowClick = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power3.out" }); // Desplaza a la parte superior de la página con el plugin
    gsap.fromTo(
      ".arrow-btn",
      { rotation: 0 },
      { rotation: 360, duration: 0.5, ease: "power3.inOut" } // Gira la flecha como una moneda
    );
  };

  return (
    <div>
      {/* Nav */}
      <nav className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/experiencias">Experiencias</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {/* Botón de la flecha */}
      {isArrowVisible && (
        <div 
          className="arrow-btn" 
          onClick={handleArrowClick} 
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            cursor: 'pointer', 
            opacity: 0, 
            animation: 'fadeIn 1s forwards', 
            transition: 'opacity 0.5s'
          }}
        >
          <ArrowUpward style={{ fontSize: 40, color: '#fff' }} />
        </div>
      )}
    </div>
  );
}

// Validación de las props
Nav.propTypes = {
  isVisible: PropTypes.bool.isRequired, // Asegura que isVisible sea un booleano
};

export default Nav;
