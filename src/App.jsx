import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Entrada from './components/Entrada';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Experiencias from './components/pages/Experiencias';
import Contacto from './components/pages/Contacto';
import Footer from './components/Footer';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Deslizar hacia abajo, ocultar el nav
        setIsNavVisible(false);
      } else {
        // Si el usuario está en la parte superior, mostrar el nav
        setIsNavVisible(true);
      }
    };

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Entrada />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      {/* Aquí aplicamos la clase de animación según la visibilidad */}
      <Nav isVisible={isNavVisible} />

      <Footer />
    </>
  );
}

export default App;
