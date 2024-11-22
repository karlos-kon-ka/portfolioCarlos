import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy Loading de componentes
const Nav = lazy(() => import("./components/Nav"));
const Entrada = lazy(() => import("./components/Entrada"));
const Experiencias = lazy(() => import("./components/pages/Experiencias"));
const Contacto = lazy(() => import("./components/pages/Contacto"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Suspense envuelve todo para manejar cargas de forma segura */}
      <Suspense fallback={<div className="loading">Cargando...</div>}>
        <Nav isVisible={isNavVisible} />
        
        <Routes>
          <Route path="/" element={<Entrada />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
